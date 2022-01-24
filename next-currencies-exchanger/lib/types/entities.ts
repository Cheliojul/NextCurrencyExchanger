export type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  handleClose: () => void;
};
export type ExchangeRatesType = { [x: string]: number }[]