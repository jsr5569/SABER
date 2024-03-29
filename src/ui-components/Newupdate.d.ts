/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewupdateOverridesProps = {
    Newupdate?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<IconProps>;
    Action3859189?: PrimitiveOverrideProps<TextProps>;
    Action3859196?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "tempImageLu0Et8 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type NewupdateProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NewupdateOverridesProps | undefined | null;
}>;
export default function Newupdate(props: NewupdateProps): React.ReactElement;
