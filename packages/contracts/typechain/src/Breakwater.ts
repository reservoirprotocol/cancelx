/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export type SchemaStruct = {
  id: PromiseOrValue<BigNumberish>;
  metadata: PromiseOrValue<BytesLike>;
};

export type SchemaStructOutput = [BigNumber, string] & {
  id: BigNumber;
  metadata: string;
};

export type SpentItemStruct = {
  itemType: PromiseOrValue<BigNumberish>;
  token: PromiseOrValue<string>;
  identifier: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
};

export type SpentItemStructOutput = [number, string, BigNumber, BigNumber] & {
  itemType: number;
  token: string;
  identifier: BigNumber;
  amount: BigNumber;
};

export type ReceivedItemStruct = {
  itemType: PromiseOrValue<BigNumberish>;
  token: PromiseOrValue<string>;
  identifier: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
  recipient: PromiseOrValue<string>;
};

export type ReceivedItemStructOutput = [
  number,
  string,
  BigNumber,
  BigNumber,
  string
] & {
  itemType: number;
  token: string;
  identifier: BigNumber;
  amount: BigNumber;
  recipient: string;
};

export type ZoneParametersStruct = {
  orderHash: PromiseOrValue<BytesLike>;
  fulfiller: PromiseOrValue<string>;
  offerer: PromiseOrValue<string>;
  offer: SpentItemStruct[];
  consideration: ReceivedItemStruct[];
  extraData: PromiseOrValue<BytesLike>;
  orderHashes: PromiseOrValue<BytesLike>[];
  startTime: PromiseOrValue<BigNumberish>;
  endTime: PromiseOrValue<BigNumberish>;
  zoneHash: PromiseOrValue<BytesLike>;
};

export type ZoneParametersStructOutput = [
  string,
  string,
  string,
  SpentItemStructOutput[],
  ReceivedItemStructOutput[],
  string,
  string[],
  BigNumber,
  BigNumber,
  string
] & {
  orderHash: string;
  fulfiller: string;
  offerer: string;
  offer: SpentItemStructOutput[];
  consideration: ReceivedItemStructOutput[];
  extraData: string;
  orderHashes: string[];
  startTime: BigNumber;
  endTime: BigNumber;
  zoneHash: string;
};

export interface BreakwaterInterface extends utils.Interface {
  functions: {
    "CONSIDERATION_BYTES()": FunctionFragment;
    "CONSIDERATION_HASHTYPE()": FunctionFragment;
    "RECEIVED_ITEM_BYTES()": FunctionFragment;
    "RECEIVED_ITEM_HASHTYPE()": FunctionFragment;
    "SIGNED_ORDER_HASHTYPE()": FunctionFragment;
    "addSigner(address)": FunctionFragment;
    "getSeaportMetadata()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeSigner(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "signerStatus(address)": FunctionFragment;
    "sip7Information()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateAPIEndpoint(string)": FunctionFragment;
    "validateOrder((bytes32,address,address,(uint8,address,uint256,uint256)[],(uint8,address,uint256,uint256,address)[],bytes,bytes32[],uint256,uint256,bytes32))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CONSIDERATION_BYTES"
      | "CONSIDERATION_HASHTYPE"
      | "RECEIVED_ITEM_BYTES"
      | "RECEIVED_ITEM_HASHTYPE"
      | "SIGNED_ORDER_HASHTYPE"
      | "addSigner"
      | "getSeaportMetadata"
      | "owner"
      | "removeSigner"
      | "renounceOwnership"
      | "signerStatus"
      | "sip7Information"
      | "transferOwnership"
      | "updateAPIEndpoint"
      | "validateOrder"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CONSIDERATION_BYTES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CONSIDERATION_HASHTYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RECEIVED_ITEM_BYTES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RECEIVED_ITEM_HASHTYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SIGNED_ORDER_HASHTYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSeaportMetadata",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "signerStatus",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "sip7Information",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAPIEndpoint",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateOrder",
    values: [ZoneParametersStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "CONSIDERATION_BYTES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CONSIDERATION_HASHTYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RECEIVED_ITEM_BYTES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RECEIVED_ITEM_HASHTYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SIGNED_ORDER_HASHTYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addSigner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSeaportMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signerStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sip7Information",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAPIEndpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateOrder",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "SeaportCompatibleContractDeployed()": EventFragment;
    "SignerAdded(address)": EventFragment;
    "SignerRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SeaportCompatibleContractDeployed"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerRemoved"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SeaportCompatibleContractDeployedEventObject {}
export type SeaportCompatibleContractDeployedEvent = TypedEvent<
  [],
  SeaportCompatibleContractDeployedEventObject
>;

export type SeaportCompatibleContractDeployedEventFilter =
  TypedEventFilter<SeaportCompatibleContractDeployedEvent>;

export interface SignerAddedEventObject {
  signer: string;
}
export type SignerAddedEvent = TypedEvent<[string], SignerAddedEventObject>;

export type SignerAddedEventFilter = TypedEventFilter<SignerAddedEvent>;

export interface SignerRemovedEventObject {
  signer: string;
}
export type SignerRemovedEvent = TypedEvent<[string], SignerRemovedEventObject>;

export type SignerRemovedEventFilter = TypedEventFilter<SignerRemovedEvent>;

export interface Breakwater extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BreakwaterInterface;

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
    CONSIDERATION_BYTES(overrides?: CallOverrides): Promise<[string]>;

    CONSIDERATION_HASHTYPE(overrides?: CallOverrides): Promise<[string]>;

    RECEIVED_ITEM_BYTES(overrides?: CallOverrides): Promise<[string]>;

    RECEIVED_ITEM_HASHTYPE(overrides?: CallOverrides): Promise<[string]>;

    SIGNED_ORDER_HASHTYPE(overrides?: CallOverrides): Promise<[string]>;

    addSigner(
      signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getSeaportMetadata(
      overrides?: CallOverrides
    ): Promise<
      [string, SchemaStructOutput[]] & {
        name: string;
        schemas: SchemaStructOutput[];
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeSigner(
      signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    signerStatus(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    sip7Information(
      overrides?: CallOverrides
    ): Promise<
      [string, string] & { domainSeparator: string; apiEndpoint: string }
    >;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateAPIEndpoint(
      newApiEndpoint: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validateOrder(
      zoneParameters: ZoneParametersStruct,
      overrides?: CallOverrides
    ): Promise<[string] & { validOrderMagicValue: string }>;
  };

  CONSIDERATION_BYTES(overrides?: CallOverrides): Promise<string>;

  CONSIDERATION_HASHTYPE(overrides?: CallOverrides): Promise<string>;

  RECEIVED_ITEM_BYTES(overrides?: CallOverrides): Promise<string>;

  RECEIVED_ITEM_HASHTYPE(overrides?: CallOverrides): Promise<string>;

  SIGNED_ORDER_HASHTYPE(overrides?: CallOverrides): Promise<string>;

  addSigner(
    signer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getSeaportMetadata(
    overrides?: CallOverrides
  ): Promise<
    [string, SchemaStructOutput[]] & {
      name: string;
      schemas: SchemaStructOutput[];
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  removeSigner(
    signer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  signerStatus(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  sip7Information(
    overrides?: CallOverrides
  ): Promise<
    [string, string] & { domainSeparator: string; apiEndpoint: string }
  >;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateAPIEndpoint(
    newApiEndpoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validateOrder(
    zoneParameters: ZoneParametersStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    CONSIDERATION_BYTES(overrides?: CallOverrides): Promise<string>;

    CONSIDERATION_HASHTYPE(overrides?: CallOverrides): Promise<string>;

    RECEIVED_ITEM_BYTES(overrides?: CallOverrides): Promise<string>;

    RECEIVED_ITEM_HASHTYPE(overrides?: CallOverrides): Promise<string>;

    SIGNED_ORDER_HASHTYPE(overrides?: CallOverrides): Promise<string>;

    addSigner(
      signer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getSeaportMetadata(
      overrides?: CallOverrides
    ): Promise<
      [string, SchemaStructOutput[]] & {
        name: string;
        schemas: SchemaStructOutput[];
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    removeSigner(
      signer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    signerStatus(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    sip7Information(
      overrides?: CallOverrides
    ): Promise<
      [string, string] & { domainSeparator: string; apiEndpoint: string }
    >;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAPIEndpoint(
      newApiEndpoint: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    validateOrder(
      zoneParameters: ZoneParametersStruct,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SeaportCompatibleContractDeployed()"(): SeaportCompatibleContractDeployedEventFilter;
    SeaportCompatibleContractDeployed(): SeaportCompatibleContractDeployedEventFilter;

    "SignerAdded(address)"(signer?: null): SignerAddedEventFilter;
    SignerAdded(signer?: null): SignerAddedEventFilter;

    "SignerRemoved(address)"(signer?: null): SignerRemovedEventFilter;
    SignerRemoved(signer?: null): SignerRemovedEventFilter;
  };

  estimateGas: {
    CONSIDERATION_BYTES(overrides?: CallOverrides): Promise<BigNumber>;

    CONSIDERATION_HASHTYPE(overrides?: CallOverrides): Promise<BigNumber>;

    RECEIVED_ITEM_BYTES(overrides?: CallOverrides): Promise<BigNumber>;

    RECEIVED_ITEM_HASHTYPE(overrides?: CallOverrides): Promise<BigNumber>;

    SIGNED_ORDER_HASHTYPE(overrides?: CallOverrides): Promise<BigNumber>;

    addSigner(
      signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getSeaportMetadata(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeSigner(
      signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    signerStatus(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sip7Information(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateAPIEndpoint(
      newApiEndpoint: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validateOrder(
      zoneParameters: ZoneParametersStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONSIDERATION_BYTES(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CONSIDERATION_HASHTYPE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    RECEIVED_ITEM_BYTES(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    RECEIVED_ITEM_HASHTYPE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SIGNED_ORDER_HASHTYPE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addSigner(
      signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getSeaportMetadata(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeSigner(
      signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    signerStatus(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sip7Information(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateAPIEndpoint(
      newApiEndpoint: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validateOrder(
      zoneParameters: ZoneParametersStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}