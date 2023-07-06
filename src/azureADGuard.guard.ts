import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';
/**
 * This is the strategy that communicates with Azure AD. Not much to do here.
 */
@Injectable()
export class AzureADStrategy extends PassportStrategy(
  BearerStrategy,
  'azureAD',
) {
  constructor() {
    const tenantID = process.env.TENANT_ID;
    const clientID = process.env.CLIENT_ID;
    const identityMetadata = `https://login.microsoftonline.com/${tenantID}/v2.0/.well-known/openid-configuration`;
    super({ identityMetadata, clientID });
  }

  async validate(data) {
    return data;
  }
}

/**
 * This is the guard that is different from online examples. When not overriding getRequest,
 * the guard will try to convert the GraphQL Context to an HTTP Context, and will fail at getting the request.
 * This override allows the guard to work with both GraphQL and HTTP requests.
 */

@Injectable()
export class AzureADGuard extends AuthGuard('azureAD') {
  override getRequest<T = any>(context: ExecutionContext): T {
    if (context.getType<GqlContextType>() === 'graphql') {
      const gql = GqlExecutionContext.create(context);
      return gql.getContext().req;
    }
    return super.getRequest(context);
  }
}
