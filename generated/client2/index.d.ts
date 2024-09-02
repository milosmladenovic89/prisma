
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Coils2
 * 
 */
export type Coils2 = $Result.DefaultSelection<Prisma.$Coils2Payload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Coils2s
 * const coils2s = await prisma.coils2.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Coils2s
   * const coils2s = await prisma.coils2.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.coils2`: Exposes CRUD operations for the **Coils2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coils2s
    * const coils2s = await prisma.coils2.findMany()
    * ```
    */
  get coils2(): Prisma.Coils2Delegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Coils2: 'Coils2'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db2?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "coils2"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Coils2: {
        payload: Prisma.$Coils2Payload<ExtArgs>
        fields: Prisma.Coils2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Coils2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Coils2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils2Payload>
          }
          findFirst: {
            args: Prisma.Coils2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Coils2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils2Payload>
          }
          findMany: {
            args: Prisma.Coils2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils2Payload>[]
          }
          create: {
            args: Prisma.Coils2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils2Payload>
          }
          createMany: {
            args: Prisma.Coils2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Coils2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils2Payload>
          }
          update: {
            args: Prisma.Coils2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils2Payload>
          }
          deleteMany: {
            args: Prisma.Coils2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Coils2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Coils2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils2Payload>
          }
          aggregate: {
            args: Prisma.Coils2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoils2>
          }
          groupBy: {
            args: Prisma.Coils2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Coils2GroupByOutputType>[]
          }
          count: {
            args: Prisma.Coils2CountArgs<ExtArgs>
            result: $Utils.Optional<Coils2CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Coils2
   */

  export type AggregateCoils2 = {
    _count: Coils2CountAggregateOutputType | null
    _avg: Coils2AvgAggregateOutputType | null
    _sum: Coils2SumAggregateOutputType | null
    _min: Coils2MinAggregateOutputType | null
    _max: Coils2MaxAggregateOutputType | null
  }

  export type Coils2AvgAggregateOutputType = {
    id: number | null
    width: number | null
    thick: number | null
  }

  export type Coils2SumAggregateOutputType = {
    id: number | null
    width: number | null
    thick: number | null
  }

  export type Coils2MinAggregateOutputType = {
    id: number | null
    number: string | null
    order: string | null
    width: number | null
    thick: number | null
    createAt: Date | null
  }

  export type Coils2MaxAggregateOutputType = {
    id: number | null
    number: string | null
    order: string | null
    width: number | null
    thick: number | null
    createAt: Date | null
  }

  export type Coils2CountAggregateOutputType = {
    id: number
    number: number
    order: number
    width: number
    thick: number
    createAt: number
    _all: number
  }


  export type Coils2AvgAggregateInputType = {
    id?: true
    width?: true
    thick?: true
  }

  export type Coils2SumAggregateInputType = {
    id?: true
    width?: true
    thick?: true
  }

  export type Coils2MinAggregateInputType = {
    id?: true
    number?: true
    order?: true
    width?: true
    thick?: true
    createAt?: true
  }

  export type Coils2MaxAggregateInputType = {
    id?: true
    number?: true
    order?: true
    width?: true
    thick?: true
    createAt?: true
  }

  export type Coils2CountAggregateInputType = {
    id?: true
    number?: true
    order?: true
    width?: true
    thick?: true
    createAt?: true
    _all?: true
  }

  export type Coils2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coils2 to aggregate.
     */
    where?: Coils2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coils2s to fetch.
     */
    orderBy?: Coils2OrderByWithRelationInput | Coils2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Coils2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coils2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coils2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coils2s
    **/
    _count?: true | Coils2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Coils2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Coils2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Coils2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Coils2MaxAggregateInputType
  }

  export type GetCoils2AggregateType<T extends Coils2AggregateArgs> = {
        [P in keyof T & keyof AggregateCoils2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoils2[P]>
      : GetScalarType<T[P], AggregateCoils2[P]>
  }




  export type Coils2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Coils2WhereInput
    orderBy?: Coils2OrderByWithAggregationInput | Coils2OrderByWithAggregationInput[]
    by: Coils2ScalarFieldEnum[] | Coils2ScalarFieldEnum
    having?: Coils2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Coils2CountAggregateInputType | true
    _avg?: Coils2AvgAggregateInputType
    _sum?: Coils2SumAggregateInputType
    _min?: Coils2MinAggregateInputType
    _max?: Coils2MaxAggregateInputType
  }

  export type Coils2GroupByOutputType = {
    id: number
    number: string
    order: string
    width: number
    thick: number
    createAt: Date
    _count: Coils2CountAggregateOutputType | null
    _avg: Coils2AvgAggregateOutputType | null
    _sum: Coils2SumAggregateOutputType | null
    _min: Coils2MinAggregateOutputType | null
    _max: Coils2MaxAggregateOutputType | null
  }

  type GetCoils2GroupByPayload<T extends Coils2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Coils2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Coils2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Coils2GroupByOutputType[P]>
            : GetScalarType<T[P], Coils2GroupByOutputType[P]>
        }
      >
    >


  export type Coils2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    order?: boolean
    width?: boolean
    thick?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["coils2"]>


  export type Coils2SelectScalar = {
    id?: boolean
    number?: boolean
    order?: boolean
    width?: boolean
    thick?: boolean
    createAt?: boolean
  }


  export type $Coils2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coils2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: string
      order: string
      width: number
      thick: number
      createAt: Date
    }, ExtArgs["result"]["coils2"]>
    composites: {}
  }

  type Coils2GetPayload<S extends boolean | null | undefined | Coils2DefaultArgs> = $Result.GetResult<Prisma.$Coils2Payload, S>

  type Coils2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Coils2FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Coils2CountAggregateInputType | true
    }

  export interface Coils2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coils2'], meta: { name: 'Coils2' } }
    /**
     * Find zero or one Coils2 that matches the filter.
     * @param {Coils2FindUniqueArgs} args - Arguments to find a Coils2
     * @example
     * // Get one Coils2
     * const coils2 = await prisma.coils2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Coils2FindUniqueArgs>(args: SelectSubset<T, Coils2FindUniqueArgs<ExtArgs>>): Prisma__Coils2Client<$Result.GetResult<Prisma.$Coils2Payload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Coils2 that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Coils2FindUniqueOrThrowArgs} args - Arguments to find a Coils2
     * @example
     * // Get one Coils2
     * const coils2 = await prisma.coils2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Coils2FindUniqueOrThrowArgs>(args: SelectSubset<T, Coils2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Coils2Client<$Result.GetResult<Prisma.$Coils2Payload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Coils2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils2FindFirstArgs} args - Arguments to find a Coils2
     * @example
     * // Get one Coils2
     * const coils2 = await prisma.coils2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Coils2FindFirstArgs>(args?: SelectSubset<T, Coils2FindFirstArgs<ExtArgs>>): Prisma__Coils2Client<$Result.GetResult<Prisma.$Coils2Payload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Coils2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils2FindFirstOrThrowArgs} args - Arguments to find a Coils2
     * @example
     * // Get one Coils2
     * const coils2 = await prisma.coils2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Coils2FindFirstOrThrowArgs>(args?: SelectSubset<T, Coils2FindFirstOrThrowArgs<ExtArgs>>): Prisma__Coils2Client<$Result.GetResult<Prisma.$Coils2Payload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Coils2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coils2s
     * const coils2s = await prisma.coils2.findMany()
     * 
     * // Get first 10 Coils2s
     * const coils2s = await prisma.coils2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coils2WithIdOnly = await prisma.coils2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Coils2FindManyArgs>(args?: SelectSubset<T, Coils2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Coils2Payload<ExtArgs>, T, "findMany">>

    /**
     * Create a Coils2.
     * @param {Coils2CreateArgs} args - Arguments to create a Coils2.
     * @example
     * // Create one Coils2
     * const Coils2 = await prisma.coils2.create({
     *   data: {
     *     // ... data to create a Coils2
     *   }
     * })
     * 
     */
    create<T extends Coils2CreateArgs>(args: SelectSubset<T, Coils2CreateArgs<ExtArgs>>): Prisma__Coils2Client<$Result.GetResult<Prisma.$Coils2Payload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Coils2s.
     * @param {Coils2CreateManyArgs} args - Arguments to create many Coils2s.
     * @example
     * // Create many Coils2s
     * const coils2 = await prisma.coils2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Coils2CreateManyArgs>(args?: SelectSubset<T, Coils2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coils2.
     * @param {Coils2DeleteArgs} args - Arguments to delete one Coils2.
     * @example
     * // Delete one Coils2
     * const Coils2 = await prisma.coils2.delete({
     *   where: {
     *     // ... filter to delete one Coils2
     *   }
     * })
     * 
     */
    delete<T extends Coils2DeleteArgs>(args: SelectSubset<T, Coils2DeleteArgs<ExtArgs>>): Prisma__Coils2Client<$Result.GetResult<Prisma.$Coils2Payload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Coils2.
     * @param {Coils2UpdateArgs} args - Arguments to update one Coils2.
     * @example
     * // Update one Coils2
     * const coils2 = await prisma.coils2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Coils2UpdateArgs>(args: SelectSubset<T, Coils2UpdateArgs<ExtArgs>>): Prisma__Coils2Client<$Result.GetResult<Prisma.$Coils2Payload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Coils2s.
     * @param {Coils2DeleteManyArgs} args - Arguments to filter Coils2s to delete.
     * @example
     * // Delete a few Coils2s
     * const { count } = await prisma.coils2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Coils2DeleteManyArgs>(args?: SelectSubset<T, Coils2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coils2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coils2s
     * const coils2 = await prisma.coils2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Coils2UpdateManyArgs>(args: SelectSubset<T, Coils2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coils2.
     * @param {Coils2UpsertArgs} args - Arguments to update or create a Coils2.
     * @example
     * // Update or create a Coils2
     * const coils2 = await prisma.coils2.upsert({
     *   create: {
     *     // ... data to create a Coils2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coils2 we want to update
     *   }
     * })
     */
    upsert<T extends Coils2UpsertArgs>(args: SelectSubset<T, Coils2UpsertArgs<ExtArgs>>): Prisma__Coils2Client<$Result.GetResult<Prisma.$Coils2Payload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Coils2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils2CountArgs} args - Arguments to filter Coils2s to count.
     * @example
     * // Count the number of Coils2s
     * const count = await prisma.coils2.count({
     *   where: {
     *     // ... the filter for the Coils2s we want to count
     *   }
     * })
    **/
    count<T extends Coils2CountArgs>(
      args?: Subset<T, Coils2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Coils2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coils2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Coils2AggregateArgs>(args: Subset<T, Coils2AggregateArgs>): Prisma.PrismaPromise<GetCoils2AggregateType<T>>

    /**
     * Group by Coils2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Coils2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Coils2GroupByArgs['orderBy'] }
        : { orderBy?: Coils2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Coils2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoils2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coils2 model
   */
  readonly fields: Coils2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coils2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Coils2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coils2 model
   */ 
  interface Coils2FieldRefs {
    readonly id: FieldRef<"Coils2", 'Int'>
    readonly number: FieldRef<"Coils2", 'String'>
    readonly order: FieldRef<"Coils2", 'String'>
    readonly width: FieldRef<"Coils2", 'Int'>
    readonly thick: FieldRef<"Coils2", 'Int'>
    readonly createAt: FieldRef<"Coils2", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coils2 findUnique
   */
  export type Coils2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils2
     */
    select?: Coils2Select<ExtArgs> | null
    /**
     * Filter, which Coils2 to fetch.
     */
    where: Coils2WhereUniqueInput
  }

  /**
   * Coils2 findUniqueOrThrow
   */
  export type Coils2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils2
     */
    select?: Coils2Select<ExtArgs> | null
    /**
     * Filter, which Coils2 to fetch.
     */
    where: Coils2WhereUniqueInput
  }

  /**
   * Coils2 findFirst
   */
  export type Coils2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils2
     */
    select?: Coils2Select<ExtArgs> | null
    /**
     * Filter, which Coils2 to fetch.
     */
    where?: Coils2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coils2s to fetch.
     */
    orderBy?: Coils2OrderByWithRelationInput | Coils2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coils2s.
     */
    cursor?: Coils2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coils2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coils2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coils2s.
     */
    distinct?: Coils2ScalarFieldEnum | Coils2ScalarFieldEnum[]
  }

  /**
   * Coils2 findFirstOrThrow
   */
  export type Coils2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils2
     */
    select?: Coils2Select<ExtArgs> | null
    /**
     * Filter, which Coils2 to fetch.
     */
    where?: Coils2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coils2s to fetch.
     */
    orderBy?: Coils2OrderByWithRelationInput | Coils2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coils2s.
     */
    cursor?: Coils2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coils2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coils2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coils2s.
     */
    distinct?: Coils2ScalarFieldEnum | Coils2ScalarFieldEnum[]
  }

  /**
   * Coils2 findMany
   */
  export type Coils2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils2
     */
    select?: Coils2Select<ExtArgs> | null
    /**
     * Filter, which Coils2s to fetch.
     */
    where?: Coils2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coils2s to fetch.
     */
    orderBy?: Coils2OrderByWithRelationInput | Coils2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coils2s.
     */
    cursor?: Coils2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coils2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coils2s.
     */
    skip?: number
    distinct?: Coils2ScalarFieldEnum | Coils2ScalarFieldEnum[]
  }

  /**
   * Coils2 create
   */
  export type Coils2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils2
     */
    select?: Coils2Select<ExtArgs> | null
    /**
     * The data needed to create a Coils2.
     */
    data: XOR<Coils2CreateInput, Coils2UncheckedCreateInput>
  }

  /**
   * Coils2 createMany
   */
  export type Coils2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coils2s.
     */
    data: Coils2CreateManyInput | Coils2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coils2 update
   */
  export type Coils2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils2
     */
    select?: Coils2Select<ExtArgs> | null
    /**
     * The data needed to update a Coils2.
     */
    data: XOR<Coils2UpdateInput, Coils2UncheckedUpdateInput>
    /**
     * Choose, which Coils2 to update.
     */
    where: Coils2WhereUniqueInput
  }

  /**
   * Coils2 updateMany
   */
  export type Coils2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coils2s.
     */
    data: XOR<Coils2UpdateManyMutationInput, Coils2UncheckedUpdateManyInput>
    /**
     * Filter which Coils2s to update
     */
    where?: Coils2WhereInput
  }

  /**
   * Coils2 upsert
   */
  export type Coils2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils2
     */
    select?: Coils2Select<ExtArgs> | null
    /**
     * The filter to search for the Coils2 to update in case it exists.
     */
    where: Coils2WhereUniqueInput
    /**
     * In case the Coils2 found by the `where` argument doesn't exist, create a new Coils2 with this data.
     */
    create: XOR<Coils2CreateInput, Coils2UncheckedCreateInput>
    /**
     * In case the Coils2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Coils2UpdateInput, Coils2UncheckedUpdateInput>
  }

  /**
   * Coils2 delete
   */
  export type Coils2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils2
     */
    select?: Coils2Select<ExtArgs> | null
    /**
     * Filter which Coils2 to delete.
     */
    where: Coils2WhereUniqueInput
  }

  /**
   * Coils2 deleteMany
   */
  export type Coils2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coils2s to delete
     */
    where?: Coils2WhereInput
  }

  /**
   * Coils2 without action
   */
  export type Coils2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils2
     */
    select?: Coils2Select<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Coils2ScalarFieldEnum: {
    id: 'id',
    number: 'number',
    order: 'order',
    width: 'width',
    thick: 'thick',
    createAt: 'createAt'
  };

  export type Coils2ScalarFieldEnum = (typeof Coils2ScalarFieldEnum)[keyof typeof Coils2ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type Coils2WhereInput = {
    AND?: Coils2WhereInput | Coils2WhereInput[]
    OR?: Coils2WhereInput[]
    NOT?: Coils2WhereInput | Coils2WhereInput[]
    id?: IntFilter<"Coils2"> | number
    number?: StringFilter<"Coils2"> | string
    order?: StringFilter<"Coils2"> | string
    width?: IntFilter<"Coils2"> | number
    thick?: IntFilter<"Coils2"> | number
    createAt?: DateTimeFilter<"Coils2"> | Date | string
  }

  export type Coils2OrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    order?: SortOrder
    width?: SortOrder
    thick?: SortOrder
    createAt?: SortOrder
  }

  export type Coils2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    number?: string
    AND?: Coils2WhereInput | Coils2WhereInput[]
    OR?: Coils2WhereInput[]
    NOT?: Coils2WhereInput | Coils2WhereInput[]
    order?: StringFilter<"Coils2"> | string
    width?: IntFilter<"Coils2"> | number
    thick?: IntFilter<"Coils2"> | number
    createAt?: DateTimeFilter<"Coils2"> | Date | string
  }, "id" | "number">

  export type Coils2OrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    order?: SortOrder
    width?: SortOrder
    thick?: SortOrder
    createAt?: SortOrder
    _count?: Coils2CountOrderByAggregateInput
    _avg?: Coils2AvgOrderByAggregateInput
    _max?: Coils2MaxOrderByAggregateInput
    _min?: Coils2MinOrderByAggregateInput
    _sum?: Coils2SumOrderByAggregateInput
  }

  export type Coils2ScalarWhereWithAggregatesInput = {
    AND?: Coils2ScalarWhereWithAggregatesInput | Coils2ScalarWhereWithAggregatesInput[]
    OR?: Coils2ScalarWhereWithAggregatesInput[]
    NOT?: Coils2ScalarWhereWithAggregatesInput | Coils2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Coils2"> | number
    number?: StringWithAggregatesFilter<"Coils2"> | string
    order?: StringWithAggregatesFilter<"Coils2"> | string
    width?: IntWithAggregatesFilter<"Coils2"> | number
    thick?: IntWithAggregatesFilter<"Coils2"> | number
    createAt?: DateTimeWithAggregatesFilter<"Coils2"> | Date | string
  }

  export type Coils2CreateInput = {
    number: string
    order: string
    width: number
    thick: number
    createAt?: Date | string
  }

  export type Coils2UncheckedCreateInput = {
    id?: number
    number: string
    order: string
    width: number
    thick: number
    createAt?: Date | string
  }

  export type Coils2UpdateInput = {
    number?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    thick?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Coils2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    thick?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Coils2CreateManyInput = {
    id?: number
    number: string
    order: string
    width: number
    thick: number
    createAt?: Date | string
  }

  export type Coils2UpdateManyMutationInput = {
    number?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    thick?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Coils2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    thick?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Coils2CountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    order?: SortOrder
    width?: SortOrder
    thick?: SortOrder
    createAt?: SortOrder
  }

  export type Coils2AvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    thick?: SortOrder
  }

  export type Coils2MaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    order?: SortOrder
    width?: SortOrder
    thick?: SortOrder
    createAt?: SortOrder
  }

  export type Coils2MinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    order?: SortOrder
    width?: SortOrder
    thick?: SortOrder
    createAt?: SortOrder
  }

  export type Coils2SumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    thick?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Coils2DefaultArgs instead
     */
    export type Coils2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Coils2DefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}