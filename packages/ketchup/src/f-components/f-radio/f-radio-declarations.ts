import type { FComponent } from '../../types/GenericTypes';
/**
 * Props of the f-radio component.
 */
export interface FRadioProps extends FComponent {
    columns?: number;
    data?: FRadioData[];
    disabled?: boolean;
    label?: string;
    leadingLabel?: boolean;
    onBlur?: (event: FocusEvent) => void;
    onChange?: (i: number, event: Event) => void;
    onFocus?: (event: FocusEvent) => void;
}
/**
 * The object of a single radio.
 */
export interface FRadioData {
    checked: boolean;
    label: string;
    value: string;
}
