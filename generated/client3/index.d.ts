
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
 * Model Coils3
 * 
 */
export type Coils3 = $Result.DefaultSelection<Prisma.$Coils3Payload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Coils3s
 * const coils3s = await prisma.coils3.findMany()
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
   * // Fetch zero or more Coils3s
   * const coils3s = await prisma.coils3.findMany()
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
   * `prisma.coils3`: Exposes CRUD operations for the **Coils3** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coils3s
    * const coils3s = await prisma.coils3.findMany()
    * ```
    */
  get coils3(): Prisma.Coils3Delegate<ExtArgs>;
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
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
    Coils3: 'Coils3'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db3?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "coils3"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Coils3: {
        payload: Prisma.$Coils3Payload<ExtArgs>
        fields: Prisma.Coils3FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Coils3FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils3Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Coils3FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils3Payload>
          }
          findFirst: {
            args: Prisma.Coils3FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils3Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Coils3FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils3Payload>
          }
          findMany: {
            args: Prisma.Coils3FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils3Payload>[]
          }
          create: {
            args: Prisma.Coils3CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils3Payload>
          }
          createMany: {
            args: Prisma.Coils3CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Coils3DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils3Payload>
          }
          update: {
            args: Prisma.Coils3UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils3Payload>
          }
          deleteMany: {
            args: Prisma.Coils3DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Coils3UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Coils3UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Coils3Payload>
          }
          aggregate: {
            args: Prisma.Coils3AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoils3>
          }
          groupBy: {
            args: Prisma.Coils3GroupByArgs<ExtArgs>
            result: $Utils.Optional<Coils3GroupByOutputType>[]
          }
          count: {
            args: Prisma.Coils3CountArgs<ExtArgs>
            result: $Utils.Optional<Coils3CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
   * Model Coils3
   */

  export type AggregateCoils3 = {
    _count: Coils3CountAggregateOutputType | null
    _avg: Coils3AvgAggregateOutputType | null
    _sum: Coils3SumAggregateOutputType | null
    _min: Coils3MinAggregateOutputType | null
    _max: Coils3MaxAggregateOutputType | null
  }

  export type Coils3AvgAggregateOutputType = {
    id: number | null
    numberCoils: number | null
  }

  export type Coils3SumAggregateOutputType = {
    id: number | null
    numberCoils: number | null
  }

  export type Coils3MinAggregateOutputType = {
    id: number | null
    status: boolean | null
    numberCoils: number | null
    createAt: Date | null
  }

  export type Coils3MaxAggregateOutputType = {
    id: number | null
    status: boolean | null
    numberCoils: number | null
    createAt: Date | null
  }

  export type Coils3CountAggregateOutputType = {
    id: number
    status: number
    numberCoils: number
    number: number
    order: number
    width: number
    thick: number
    createAt: number
    _all: number
  }


  export type Coils3AvgAggregateInputType = {
    id?: true
    numberCoils?: true
  }

  export type Coils3SumAggregateInputType = {
    id?: true
    numberCoils?: true
  }

  export type Coils3MinAggregateInputType = {
    id?: true
    status?: true
    numberCoils?: true
    createAt?: true
  }

  export type Coils3MaxAggregateInputType = {
    id?: true
    status?: true
    numberCoils?: true
    createAt?: true
  }

  export type Coils3CountAggregateInputType = {
    id?: true
    status?: true
    numberCoils?: true
    number?: true
    order?: true
    width?: true
    thick?: true
    createAt?: true
    _all?: true
  }

  export type Coils3AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coils3 to aggregate.
     */
    where?: Coils3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coils3s to fetch.
     */
    orderBy?: Coils3OrderByWithRelationInput | Coils3OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Coils3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coils3s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coils3s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coils3s
    **/
    _count?: true | Coils3CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Coils3AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Coils3SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Coils3MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Coils3MaxAggregateInputType
  }

  export type GetCoils3AggregateType<T extends Coils3AggregateArgs> = {
        [P in keyof T & keyof AggregateCoils3]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoils3[P]>
      : GetScalarType<T[P], AggregateCoils3[P]>
  }




  export type Coils3GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Coils3WhereInput
    orderBy?: Coils3OrderByWithAggregationInput | Coils3OrderByWithAggregationInput[]
    by: Coils3ScalarFieldEnum[] | Coils3ScalarFieldEnum
    having?: Coils3ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Coils3CountAggregateInputType | true
    _avg?: Coils3AvgAggregateInputType
    _sum?: Coils3SumAggregateInputType
    _min?: Coils3MinAggregateInputType
    _max?: Coils3MaxAggregateInputType
  }

  export type Coils3GroupByOutputType = {
    id: number
    status: boolean
    numberCoils: number
    number: JsonValue
    order: JsonValue
    width: JsonValue
    thick: JsonValue
    createAt: Date
    _count: Coils3CountAggregateOutputType | null
    _avg: Coils3AvgAggregateOutputType | null
    _sum: Coils3SumAggregateOutputType | null
    _min: Coils3MinAggregateOutputType | null
    _max: Coils3MaxAggregateOutputType | null
  }

  type GetCoils3GroupByPayload<T extends Coils3GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Coils3GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Coils3GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Coils3GroupByOutputType[P]>
            : GetScalarType<T[P], Coils3GroupByOutputType[P]>
        }
      >
    >


  export type Coils3Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    numberCoils?: boolean
    number?: boolean
    order?: boolean
    width?: boolean
    thick?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["coils3"]>


  export type Coils3SelectScalar = {
    id?: boolean
    status?: boolean
    numberCoils?: boolean
    number?: boolean
    order?: boolean
    width?: boolean
    thick?: boolean
    createAt?: boolean
  }


  export type $Coils3Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coils3"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: boolean
      numberCoils: number
      number: Prisma.JsonValue
      order: Prisma.JsonValue
      width: Prisma.JsonValue
      thick: Prisma.JsonValue
      createAt: Date
    }, ExtArgs["result"]["coils3"]>
    composites: {}
  }

  type Coils3GetPayload<S extends boolean | null | undefined | Coils3DefaultArgs> = $Result.GetResult<Prisma.$Coils3Payload, S>

  type Coils3CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Coils3FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Coils3CountAggregateInputType | true
    }

  export interface Coils3Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coils3'], meta: { name: 'Coils3' } }
    /**
     * Find zero or one Coils3 that matches the filter.
     * @param {Coils3FindUniqueArgs} args - Arguments to find a Coils3
     * @example
     * // Get one Coils3
     * const coils3 = await prisma.coils3.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Coils3FindUniqueArgs>(args: SelectSubset<T, Coils3FindUniqueArgs<ExtArgs>>): Prisma__Coils3Client<$Result.GetResult<Prisma.$Coils3Payload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Coils3 that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Coils3FindUniqueOrThrowArgs} args - Arguments to find a Coils3
     * @example
     * // Get one Coils3
     * const coils3 = await prisma.coils3.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Coils3FindUniqueOrThrowArgs>(args: SelectSubset<T, Coils3FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Coils3Client<$Result.GetResult<Prisma.$Coils3Payload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Coils3 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils3FindFirstArgs} args - Arguments to find a Coils3
     * @example
     * // Get one Coils3
     * const coils3 = await prisma.coils3.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Coils3FindFirstArgs>(args?: SelectSubset<T, Coils3FindFirstArgs<ExtArgs>>): Prisma__Coils3Client<$Result.GetResult<Prisma.$Coils3Payload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Coils3 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils3FindFirstOrThrowArgs} args - Arguments to find a Coils3
     * @example
     * // Get one Coils3
     * const coils3 = await prisma.coils3.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Coils3FindFirstOrThrowArgs>(args?: SelectSubset<T, Coils3FindFirstOrThrowArgs<ExtArgs>>): Prisma__Coils3Client<$Result.GetResult<Prisma.$Coils3Payload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Coils3s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils3FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coils3s
     * const coils3s = await prisma.coils3.findMany()
     * 
     * // Get first 10 Coils3s
     * const coils3s = await prisma.coils3.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coils3WithIdOnly = await prisma.coils3.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Coils3FindManyArgs>(args?: SelectSubset<T, Coils3FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Coils3Payload<ExtArgs>, T, "findMany">>

    /**
     * Create a Coils3.
     * @param {Coils3CreateArgs} args - Arguments to create a Coils3.
     * @example
     * // Create one Coils3
     * const Coils3 = await prisma.coils3.create({
     *   data: {
     *     // ... data to create a Coils3
     *   }
     * })
     * 
     */
    create<T extends Coils3CreateArgs>(args: SelectSubset<T, Coils3CreateArgs<ExtArgs>>): Prisma__Coils3Client<$Result.GetResult<Prisma.$Coils3Payload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Coils3s.
     * @param {Coils3CreateManyArgs} args - Arguments to create many Coils3s.
     * @example
     * // Create many Coils3s
     * const coils3 = await prisma.coils3.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Coils3CreateManyArgs>(args?: SelectSubset<T, Coils3CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coils3.
     * @param {Coils3DeleteArgs} args - Arguments to delete one Coils3.
     * @example
     * // Delete one Coils3
     * const Coils3 = await prisma.coils3.delete({
     *   where: {
     *     // ... filter to delete one Coils3
     *   }
     * })
     * 
     */
    delete<T extends Coils3DeleteArgs>(args: SelectSubset<T, Coils3DeleteArgs<ExtArgs>>): Prisma__Coils3Client<$Result.GetResult<Prisma.$Coils3Payload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Coils3.
     * @param {Coils3UpdateArgs} args - Arguments to update one Coils3.
     * @example
     * // Update one Coils3
     * const coils3 = await prisma.coils3.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Coils3UpdateArgs>(args: SelectSubset<T, Coils3UpdateArgs<ExtArgs>>): Prisma__Coils3Client<$Result.GetResult<Prisma.$Coils3Payload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Coils3s.
     * @param {Coils3DeleteManyArgs} args - Arguments to filter Coils3s to delete.
     * @example
     * // Delete a few Coils3s
     * const { count } = await prisma.coils3.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Coils3DeleteManyArgs>(args?: SelectSubset<T, Coils3DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coils3s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils3UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coils3s
     * const coils3 = await prisma.coils3.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Coils3UpdateManyArgs>(args: SelectSubset<T, Coils3UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coils3.
     * @param {Coils3UpsertArgs} args - Arguments to update or create a Coils3.
     * @example
     * // Update or create a Coils3
     * const coils3 = await prisma.coils3.upsert({
     *   create: {
     *     // ... data to create a Coils3
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coils3 we want to update
     *   }
     * })
     */
    upsert<T extends Coils3UpsertArgs>(args: SelectSubset<T, Coils3UpsertArgs<ExtArgs>>): Prisma__Coils3Client<$Result.GetResult<Prisma.$Coils3Payload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Coils3s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils3CountArgs} args - Arguments to filter Coils3s to count.
     * @example
     * // Count the number of Coils3s
     * const count = await prisma.coils3.count({
     *   where: {
     *     // ... the filter for the Coils3s we want to count
     *   }
     * })
    **/
    count<T extends Coils3CountArgs>(
      args?: Subset<T, Coils3CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Coils3CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coils3.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils3AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Coils3AggregateArgs>(args: Subset<T, Coils3AggregateArgs>): Prisma.PrismaPromise<GetCoils3AggregateType<T>>

    /**
     * Group by Coils3.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coils3GroupByArgs} args - Group by arguments.
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
      T extends Coils3GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Coils3GroupByArgs['orderBy'] }
        : { orderBy?: Coils3GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Coils3GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoils3GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coils3 model
   */
  readonly fields: Coils3FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coils3.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Coils3Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Coils3 model
   */ 
  interface Coils3FieldRefs {
    readonly id: FieldRef<"Coils3", 'Int'>
    readonly status: FieldRef<"Coils3", 'Boolean'>
    readonly numberCoils: FieldRef<"Coils3", 'Int'>
    readonly number: FieldRef<"Coils3", 'Json'>
    readonly order: FieldRef<"Coils3", 'Json'>
    readonly width: FieldRef<"Coils3", 'Json'>
    readonly thick: FieldRef<"Coils3", 'Json'>
    readonly createAt: FieldRef<"Coils3", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coils3 findUnique
   */
  export type Coils3FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils3
     */
    select?: Coils3Select<ExtArgs> | null
    /**
     * Filter, which Coils3 to fetch.
     */
    where: Coils3WhereUniqueInput
  }

  /**
   * Coils3 findUniqueOrThrow
   */
  export type Coils3FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils3
     */
    select?: Coils3Select<ExtArgs> | null
    /**
     * Filter, which Coils3 to fetch.
     */
    where: Coils3WhereUniqueInput
  }

  /**
   * Coils3 findFirst
   */
  export type Coils3FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils3
     */
    select?: Coils3Select<ExtArgs> | null
    /**
     * Filter, which Coils3 to fetch.
     */
    where?: Coils3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coils3s to fetch.
     */
    orderBy?: Coils3OrderByWithRelationInput | Coils3OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coils3s.
     */
    cursor?: Coils3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coils3s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coils3s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coils3s.
     */
    distinct?: Coils3ScalarFieldEnum | Coils3ScalarFieldEnum[]
  }

  /**
   * Coils3 findFirstOrThrow
   */
  export type Coils3FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils3
     */
    select?: Coils3Select<ExtArgs> | null
    /**
     * Filter, which Coils3 to fetch.
     */
    where?: Coils3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coils3s to fetch.
     */
    orderBy?: Coils3OrderByWithRelationInput | Coils3OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coils3s.
     */
    cursor?: Coils3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coils3s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coils3s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coils3s.
     */
    distinct?: Coils3ScalarFieldEnum | Coils3ScalarFieldEnum[]
  }

  /**
   * Coils3 findMany
   */
  export type Coils3FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils3
     */
    select?: Coils3Select<ExtArgs> | null
    /**
     * Filter, which Coils3s to fetch.
     */
    where?: Coils3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coils3s to fetch.
     */
    orderBy?: Coils3OrderByWithRelationInput | Coils3OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coils3s.
     */
    cursor?: Coils3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coils3s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coils3s.
     */
    skip?: number
    distinct?: Coils3ScalarFieldEnum | Coils3ScalarFieldEnum[]
  }

  /**
   * Coils3 create
   */
  export type Coils3CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils3
     */
    select?: Coils3Select<ExtArgs> | null
    /**
     * The data needed to create a Coils3.
     */
    data: XOR<Coils3CreateInput, Coils3UncheckedCreateInput>
  }

  /**
   * Coils3 createMany
   */
  export type Coils3CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coils3s.
     */
    data: Coils3CreateManyInput | Coils3CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coils3 update
   */
  export type Coils3UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils3
     */
    select?: Coils3Select<ExtArgs> | null
    /**
     * The data needed to update a Coils3.
     */
    data: XOR<Coils3UpdateInput, Coils3UncheckedUpdateInput>
    /**
     * Choose, which Coils3 to update.
     */
    where: Coils3WhereUniqueInput
  }

  /**
   * Coils3 updateMany
   */
  export type Coils3UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coils3s.
     */
    data: XOR<Coils3UpdateManyMutationInput, Coils3UncheckedUpdateManyInput>
    /**
     * Filter which Coils3s to update
     */
    where?: Coils3WhereInput
  }

  /**
   * Coils3 upsert
   */
  export type Coils3UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils3
     */
    select?: Coils3Select<ExtArgs> | null
    /**
     * The filter to search for the Coils3 to update in case it exists.
     */
    where: Coils3WhereUniqueInput
    /**
     * In case the Coils3 found by the `where` argument doesn't exist, create a new Coils3 with this data.
     */
    create: XOR<Coils3CreateInput, Coils3UncheckedCreateInput>
    /**
     * In case the Coils3 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Coils3UpdateInput, Coils3UncheckedUpdateInput>
  }

  /**
   * Coils3 delete
   */
  export type Coils3DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils3
     */
    select?: Coils3Select<ExtArgs> | null
    /**
     * Filter which Coils3 to delete.
     */
    where: Coils3WhereUniqueInput
  }

  /**
   * Coils3 deleteMany
   */
  export type Coils3DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coils3s to delete
     */
    where?: Coils3WhereInput
  }

  /**
   * Coils3 without action
   */
  export type Coils3DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coils3
     */
    select?: Coils3Select<ExtArgs> | null
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


  export const Coils3ScalarFieldEnum: {
    id: 'id',
    status: 'status',
    numberCoils: 'numberCoils',
    number: 'number',
    order: 'order',
    width: 'width',
    thick: 'thick',
    createAt: 'createAt'
  };

  export type Coils3ScalarFieldEnum = (typeof Coils3ScalarFieldEnum)[keyof typeof Coils3ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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


  export type Coils3WhereInput = {
    AND?: Coils3WhereInput | Coils3WhereInput[]
    OR?: Coils3WhereInput[]
    NOT?: Coils3WhereInput | Coils3WhereInput[]
    id?: IntFilter<"Coils3"> | number
    status?: BoolFilter<"Coils3"> | boolean
    numberCoils?: IntFilter<"Coils3"> | number
    number?: JsonFilter<"Coils3">
    order?: JsonFilter<"Coils3">
    width?: JsonFilter<"Coils3">
    thick?: JsonFilter<"Coils3">
    createAt?: DateTimeFilter<"Coils3"> | Date | string
  }

  export type Coils3OrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    numberCoils?: SortOrder
    number?: SortOrder
    order?: SortOrder
    width?: SortOrder
    thick?: SortOrder
    createAt?: SortOrder
  }

  export type Coils3WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Coils3WhereInput | Coils3WhereInput[]
    OR?: Coils3WhereInput[]
    NOT?: Coils3WhereInput | Coils3WhereInput[]
    status?: BoolFilter<"Coils3"> | boolean
    numberCoils?: IntFilter<"Coils3"> | number
    number?: JsonFilter<"Coils3">
    order?: JsonFilter<"Coils3">
    width?: JsonFilter<"Coils3">
    thick?: JsonFilter<"Coils3">
    createAt?: DateTimeFilter<"Coils3"> | Date | string
  }, "id">

  export type Coils3OrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    numberCoils?: SortOrder
    number?: SortOrder
    order?: SortOrder
    width?: SortOrder
    thick?: SortOrder
    createAt?: SortOrder
    _count?: Coils3CountOrderByAggregateInput
    _avg?: Coils3AvgOrderByAggregateInput
    _max?: Coils3MaxOrderByAggregateInput
    _min?: Coils3MinOrderByAggregateInput
    _sum?: Coils3SumOrderByAggregateInput
  }

  export type Coils3ScalarWhereWithAggregatesInput = {
    AND?: Coils3ScalarWhereWithAggregatesInput | Coils3ScalarWhereWithAggregatesInput[]
    OR?: Coils3ScalarWhereWithAggregatesInput[]
    NOT?: Coils3ScalarWhereWithAggregatesInput | Coils3ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Coils3"> | number
    status?: BoolWithAggregatesFilter<"Coils3"> | boolean
    numberCoils?: IntWithAggregatesFilter<"Coils3"> | number
    number?: JsonWithAggregatesFilter<"Coils3">
    order?: JsonWithAggregatesFilter<"Coils3">
    width?: JsonWithAggregatesFilter<"Coils3">
    thick?: JsonWithAggregatesFilter<"Coils3">
    createAt?: DateTimeWithAggregatesFilter<"Coils3"> | Date | string
  }

  export type Coils3CreateInput = {
    status: boolean
    numberCoils: number
    number: JsonNullValueInput | InputJsonValue
    order: JsonNullValueInput | InputJsonValue
    width: JsonNullValueInput | InputJsonValue
    thick: JsonNullValueInput | InputJsonValue
    createAt?: Date | string
  }

  export type Coils3UncheckedCreateInput = {
    id?: number
    status: boolean
    numberCoils: number
    number: JsonNullValueInput | InputJsonValue
    order: JsonNullValueInput | InputJsonValue
    width: JsonNullValueInput | InputJsonValue
    thick: JsonNullValueInput | InputJsonValue
    createAt?: Date | string
  }

  export type Coils3UpdateInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    numberCoils?: IntFieldUpdateOperationsInput | number
    number?: JsonNullValueInput | InputJsonValue
    order?: JsonNullValueInput | InputJsonValue
    width?: JsonNullValueInput | InputJsonValue
    thick?: JsonNullValueInput | InputJsonValue
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Coils3UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    numberCoils?: IntFieldUpdateOperationsInput | number
    number?: JsonNullValueInput | InputJsonValue
    order?: JsonNullValueInput | InputJsonValue
    width?: JsonNullValueInput | InputJsonValue
    thick?: JsonNullValueInput | InputJsonValue
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Coils3CreateManyInput = {
    id?: number
    status: boolean
    numberCoils: number
    number: JsonNullValueInput | InputJsonValue
    order: JsonNullValueInput | InputJsonValue
    width: JsonNullValueInput | InputJsonValue
    thick: JsonNullValueInput | InputJsonValue
    createAt?: Date | string
  }

  export type Coils3UpdateManyMutationInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    numberCoils?: IntFieldUpdateOperationsInput | number
    number?: JsonNullValueInput | InputJsonValue
    order?: JsonNullValueInput | InputJsonValue
    width?: JsonNullValueInput | InputJsonValue
    thick?: JsonNullValueInput | InputJsonValue
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Coils3UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    numberCoils?: IntFieldUpdateOperationsInput | number
    number?: JsonNullValueInput | InputJsonValue
    order?: JsonNullValueInput | InputJsonValue
    width?: JsonNullValueInput | InputJsonValue
    thick?: JsonNullValueInput | InputJsonValue
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type Coils3CountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    numberCoils?: SortOrder
    number?: SortOrder
    order?: SortOrder
    width?: SortOrder
    thick?: SortOrder
    createAt?: SortOrder
  }

  export type Coils3AvgOrderByAggregateInput = {
    id?: SortOrder
    numberCoils?: SortOrder
  }

  export type Coils3MaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    numberCoils?: SortOrder
    createAt?: SortOrder
  }

  export type Coils3MinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    numberCoils?: SortOrder
    createAt?: SortOrder
  }

  export type Coils3SumOrderByAggregateInput = {
    id?: SortOrder
    numberCoils?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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
     * @deprecated Use Coils3DefaultArgs instead
     */
    export type Coils3Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Coils3DefaultArgs<ExtArgs>

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