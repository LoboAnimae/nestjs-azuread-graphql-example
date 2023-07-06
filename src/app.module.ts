import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { AzureADStrategy } from './azureADGuard.guard';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    PassportModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      fieldResolverEnhancers: ['guards'], // <- Add the guard enhancer
      context: ({ req }) => ({ req }), // <- Make the context the request, so the guard can access it
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AzureADStrategy], // <- Make sure to add the strategy here, or Passport won't recognize it!
})
export class AppModule {}
