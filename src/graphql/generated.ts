import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum Brand {
  Adidas = 'Adidas',
  AirJordan = 'Air_Jordan',
  Nike = 'Nike',
  OffWhite = 'Off_White',
  Puma = 'Puma',
  Yeezy = 'Yeezy'
}

export type ClientSideUser = {
  __typename?: 'ClientSideUser';
  dateCreated: Scalars['Int']['output'];
  userRole: UserRoles;
  username: Scalars['String']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<ClientSideUser>;
};

export type Mutation = {
  __typename?: 'Mutation';
  buyShoes?: Maybe<BuyShoeResponse>;
  register?: Maybe<RegisterResponse>;
};


export type MutationBuyShoesArgs = {
  shoes: Array<CartShoeInput>;
  username: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export enum Order {
  Competiable = 'Competiable',
  LastAdded = 'LastAdded',
  Sales = 'Sales'
}

export type PurchaseType = {
  __typename?: 'PurchaseType';
  date: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  shoeItem: ShoeItem;
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  basicShoe?: Maybe<Array<BasicShoe>>;
  login?: Maybe<LoginResponse>;
  shoeItemsByCart?: Maybe<Array<ShoeItem>>;
  shoeItemsByFilter?: Maybe<Array<ShoeItem>>;
  sizesByBasicShoe?: Maybe<Array<Scalars['Float']['output']>>;
};


export type QueryBasicShoeArgs = {
  n?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order>;
  username: Scalars['String']['input'];
};


export type QueryLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type QueryShoeItemsByCartArgs = {
  shoes?: InputMaybe<Array<InputMaybe<CartShoeInput>>>;
};


export type QueryShoeItemsByFilterArgs = {
  filter?: InputMaybe<ShoesFilter>;
};


export type QuerySizesByBasicShoeArgs = {
  basicShoeId: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  dateCreated: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  recommendedShoes: Array<ShoePreference>;
  userRole: UserRoles;
  username: Scalars['String']['output'];
};

export enum UserRoles {
  Admin = 'Admin',
  User = 'User'
}

export type BasicShoe = {
  __typename?: 'basicShoe';
  brand: Array<Brand>;
  id: Scalars['String']['output'];
  model: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rates: Scalars['Float']['output'];
};

export type BasicShoeInput = {
  brand: Array<Brand>;
  id: Scalars['String']['input'];
  model: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  rates: Scalars['Float']['input'];
};

export type BuyShoeResponse = {
  __typename?: 'buyShoeResponse';
  missingShoes?: Maybe<Array<CartShoe>>;
  success: Scalars['Boolean']['output'];
};

export type CartShoe = {
  __typename?: 'cartShoe';
  size: Scalars['Int']['output'];
  type: BasicShoe;
};

export type CartShoeInput = {
  size: Scalars['Float']['input'];
  type: BasicShoeInput;
};

export type Price = {
  max: Scalars['Int']['input'];
  min: Scalars['Int']['input'];
};

export type ShoeItem = {
  __typename?: 'shoeItem';
  dateCreated: Scalars['Int']['output'];
  datePurchased?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  type: BasicShoe;
};

export type ShoePreference = {
  __typename?: 'shoePreference';
  preference: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type ShoesFilter = {
  brand?: InputMaybe<Array<Brand>>;
  n?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Price>;
  size?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type SignupResponse = {
  __typename?: 'signupResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type BuyShoesMutationVariables = Exact<{
  username: Scalars['String']['input'];
  shoes: Array<CartShoeInput> | CartShoeInput;
}>;


export type BuyShoesMutation = { __typename?: 'Mutation', buyShoes?: { __typename?: 'buyShoeResponse', success: boolean, missingShoes?: Array<{ __typename?: 'cartShoe', size: number, type: { __typename?: 'basicShoe', id: string, brand: Array<Brand>, model: string, price: number, rates: number } }> | null } | null };

export type GetShoeItemsQueryVariables = Exact<{
  filter: ShoesFilter;
}>;


export type GetShoeItemsQuery = { __typename?: 'Query', shoeItemsByFilter?: Array<{ __typename?: 'shoeItem', id: string, size: number, dateCreated: number, datePurchased?: number | null, type: { __typename?: 'basicShoe', id: string, brand: Array<Brand>, model: string, price: number, rates: number } }> | null };

export type GetBasicShoesQueryVariables = Exact<{
  username: Scalars['String']['input'];
  order?: InputMaybe<Order>;
  n?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetBasicShoesQuery = { __typename?: 'Query', basicShoe?: Array<{ __typename?: 'basicShoe', id: string, brand: Array<Brand>, model: string, price: number, rates: number }> | null };

export type GetSizesByBasicShoeQueryVariables = Exact<{
  basicShoeId: Scalars['String']['input'];
}>;


export type GetSizesByBasicShoeQuery = { __typename?: 'Query', sizesByBasicShoe?: Array<number> | null };

export type GetShoesByCartQueryVariables = Exact<{
  shoes?: InputMaybe<Array<InputMaybe<CartShoeInput>> | InputMaybe<CartShoeInput>>;
}>;


export type GetShoesByCartQuery = { __typename?: 'Query', shoeItemsByCart?: Array<{ __typename?: 'shoeItem', size: number, type: { __typename?: 'basicShoe', id: string, brand: Array<Brand>, model: string, price: number, rates: number } }> | null };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'RegisterResponse', success: boolean, message: string } | null };

export type LoginQueryVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'LoginResponse', success: boolean, message: string, user?: { __typename?: 'ClientSideUser', username: string } | null } | null };

export const BuyShoesDocument = gql`
    mutation buyShoes($username: String!, $shoes: [cartShoeInput!]!) {
  buyShoes(username: $username, shoes: $shoes) {
    success
    missingShoes {
      type {
        id
        brand
        model
        price
        rates
      }
      size
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BuyShoesGQL extends Apollo.Mutation<BuyShoesMutation, BuyShoesMutationVariables> {
    document = BuyShoesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetShoeItemsDocument = gql`
    query getShoeItems($filter: shoesFilter!) {
  shoeItemsByFilter(filter: $filter) {
    id
    size
    dateCreated
    datePurchased
    type {
      id
      brand
      model
      price
      rates
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetShoeItemsGQL extends Apollo.Query<GetShoeItemsQuery, GetShoeItemsQueryVariables> {
    document = GetShoeItemsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetBasicShoesDocument = gql`
    query getBasicShoes($username: String!, $order: Order, $n: Int) {
  basicShoe(username: $username, order: $order, n: $n) {
    id
    brand
    model
    price
    rates
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBasicShoesGQL extends Apollo.Query<GetBasicShoesQuery, GetBasicShoesQueryVariables> {
    document = GetBasicShoesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSizesByBasicShoeDocument = gql`
    query getSizesByBasicShoe($basicShoeId: String!) {
  sizesByBasicShoe(basicShoeId: $basicShoeId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSizesByBasicShoeGQL extends Apollo.Query<GetSizesByBasicShoeQuery, GetSizesByBasicShoeQueryVariables> {
    document = GetSizesByBasicShoeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetShoesByCartDocument = gql`
    query getShoesByCart($shoes: [cartShoeInput]) {
  shoeItemsByCart(shoes: $shoes) {
    size
    type {
      id
      brand
      model
      price
      rates
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetShoesByCartGQL extends Apollo.Query<GetShoesByCartQuery, GetShoesByCartQueryVariables> {
    document = GetShoesByCartDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  register(username: $username, password: $password) {
    success
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    query Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    success
    message
    user {
      username
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }