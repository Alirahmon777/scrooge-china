export interface ILanguageCurrencyNav {
  id: string;
  lang?: string;
  label: string;
  icon?: string;
  href?: string;
  items?: ILanguageCurrencyNav[];
}

export interface IHeaderNav {
  name: string;
  href?: string;
  children?: ILanguageCurrencyNav[];
}

export interface IPopoverProps {
  position: PositionTypes;
  isHover?: boolean;
  isActive?: (item: ILanguageCurrencyNav) => boolean;
  items?: ILanguageCurrencyNav[];
  onClickItem: (item: ILanguageCurrencyNav) => void;
  children: (
    isOpen: boolean,
    setShowPopover: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode | React.ReactNode;
  contentClass?: string;
  hasLang?: boolean;
  triggerRef?: RefObject<HTMLButtonElement>;
}

type PositionTypes = 'bottom' | 'top' | 'left' | 'right';
