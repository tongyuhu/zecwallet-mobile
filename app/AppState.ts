export interface TotalBalance {
  // Total t address, confirmed and spendable
  transparentBal: number;

  // Total private, confirmed + unconfirmed
  privateBal: number;

  // Total private, confirmed funds that are spendable
  verifiedPrivate: number;

  // Total unconfirmed + spendable
  total: number;
}

export class AddressBalance {
  address: string;

  balance: number;

  containsPending: boolean;

  constructor(address: string, balance: number) {
    this.address = address;
    this.balance = balance;
    this.containsPending = false;
  }
}

export class AddressBookEntry {
  label: string;

  address: string;

  constructor(label: string, address: string) {
    this.label = label;
    this.address = address;
  }
}

export interface TxDetail {
  address: string;
  amount: number;
  memo: string | null;
}

// List of transactions.
export interface Transaction {
  type: string;
  address: string;
  amount: number;
  position: string;
  confirmations: number;
  txid: string;
  time: number;
  detailedTxns: TxDetail[];
}

export class ToAddr {
  id: number;
  to: string;
  amount: number;
  memo: string;

  constructor(id: number) {
    this.id = id;

    this.to = '';
    this.amount = 0;
    this.memo = '';
  }
}

export class SendPageState {
  fromaddr: string;

  toaddrs: ToAddr[];

  constructor() {
    this.fromaddr = '';
    this.toaddrs = [];
  }
}

export class ReceivePageState {
  // A newly created address to show by default
  newAddress: string;

  // The key used for the receive page component.
  // Increment to force re-render
  rerenderKey: number;

  constructor() {
    this.newAddress = '';
    this.rerenderKey = 0;
  }
}

export class RPCConfig {
  url: string;

  constructor() {
    this.url = '';
  }
}

export interface Info {
  testnet: boolean;
  latestBlock: number;
  connections: number;
  version: number;
  verificationProgress: number;
  currencyName: string;
  solps: number;
  zecPrice: number | null;
  encrypted: boolean;
  locked: boolean;
}

export interface ServerSelectState {
  modalIsOpen: boolean;
}

export class PasswordState {
  showPassword: boolean;

  confirmNeeded: boolean;

  passwordCallback: ((password: string) => void) | null;

  closeCallback: (() => void) | null;

  helpText: string | null;

  constructor() {
    this.showPassword = false;
    this.confirmNeeded = false;
    this.passwordCallback = null;
    this.closeCallback = null;
    this.helpText = null;
  }
}

export interface ConnectedCompanionApp {
  name: string;
  lastSeen: number;
}

export default interface AppState {
  // The total confirmed and unconfirmed balance in this wallet
  totalBalance: TotalBalance;

  // The list of all t and z addresses that have a current balance. That is, the list of
  // addresses that have a (confirmed or unconfirmed) UTXO or note pending.
  addressesWithBalance: AddressBalance[];

  // A map type that contains address -> privatekey mapping, for display on the receive page
  // This mapping is ephemeral, and will disappear when the user navigates away.
  addressPrivateKeys: Map<string, string>;

  // List of all addresses in the wallet, including change addresses and addresses
  // that don't have any balance or are unused
  addresses: string[];

  // List of Address / Label pairs
  addressBook: AddressBookEntry[];

  // List of all T and Z transactions
  transactions: Transaction[];

  // The state of the send page, as the user constructs a transaction
  sendPageState: SendPageState;

  // Any state for the receive page
  receivePageState: ReceivePageState;

  // The Current configuration of the RPC params
  rpcConfig: RPCConfig;

  // getinfo and getblockchaininfo result
  info: Info;

  // Is the app rescanning?
  rescanning: boolean;

  // Callbacks for the password dialog box
  passwordState: PasswordState;

  // The last seen connected companion app
  connectedCompanionApp: ConnectedCompanionApp;
  // eslint-disable-next-line semi
}
