/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface SignedZoneInterfaceInterface extends utils.Interface {
  functions: {
    "getActiveSigners()": FunctionFragment;
    "updateSigner(address,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getActiveSigners" | "updateSigner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getActiveSigners",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateSigner",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getActiveSigners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateSigner",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SignedZoneInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SignedZoneInterfaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getActiveSigners(
      overrides?: CallOverrides
    ): Promise<[string[]] & { signers: string[] }>;

    updateSigner(
      signer: PromiseOrValue<string>,
      active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getActiveSigners(overrides?: CallOverrides): Promise<string[]>;

  updateSigner(
    signer: PromiseOrValue<string>,
    active: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getActiveSigners(overrides?: CallOverrides): Promise<string[]>;

    updateSigner(
      signer: PromiseOrValue<string>,
      active: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getActiveSigners(overrides?: CallOverrides): Promise<BigNumber>;

    updateSigner(
      signer: PromiseOrValue<string>,
      active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getActiveSigners(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateSigner(
      signer: PromiseOrValue<string>,
      active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
