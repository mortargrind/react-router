/// <reference types="react" />
import PropTypes from 'prop-types';
import { GestureResponderEvent, TouchableHighlightProps } from 'react-native';
import { MemoryRouter, MemoryRouterProps, Navigate, Outlet, Route, Router, Routes, createRoutesFromArray, createRoutesFromChildren, generatePath, matchRoutes, matchPath, resolvePath, useBlocker, useHref, useInRouterContext, useLocation, useMatch, useNavigate, useOutlet, useParams, useResolvedPath, useRoutes } from 'react-router';
import { State, To } from 'history';
import URLSearchParams from '@ungap/url-search-params';
export { MemoryRouter, Navigate, Outlet, Route, Router, Routes, createRoutesFromArray, createRoutesFromChildren, generatePath, matchRoutes, matchPath, resolvePath, useBlocker, useHref, useInRouterContext, useLocation, useMatch, useNavigate, useOutlet, useParams, useResolvedPath, useRoutes };
/**
 * A <Router> that runs on React Native.
 */
export declare function NativeRouter(props: NativeRouterProps): JSX.Element;
export declare namespace NativeRouter {
    var displayName: string;
    var propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        initialEntries: PropTypes.Requireable<(string | PropTypes.InferProps<{
            pathname: PropTypes.Requireable<string>;
            search: PropTypes.Requireable<string>;
            hash: PropTypes.Requireable<string>;
            state: PropTypes.Requireable<object>;
            key: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        initialIndex: PropTypes.Requireable<number>;
    };
}
export interface NativeRouterProps extends MemoryRouterProps {
}
/**
 * A <TouchableHighlight> that navigates to a different URL when touched.
 */
export declare function Link({ onPress, replace, state, to, ...rest }: LinkProps): JSX.Element;
export declare namespace Link {
    var displayName: string;
    var propTypes: {
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
        replace: PropTypes.Requireable<boolean>;
        state: PropTypes.Requireable<object>;
        to: PropTypes.Requireable<string | object>;
    };
}
export interface LinkProps extends TouchableHighlightProps {
    onPress?: (event: GestureResponderEvent) => void;
    replace?: boolean;
    state?: State;
    to: To;
}
/**
 * A declarative interface for showing an Alert dialog with the given
 * message when the user tries to navigate away from the current screen.
 *
 * This also serves as a reference implementation for anyone who wants
 * to create their own custom prompt component.
 */
export declare function Prompt({ message, when }: PromptProps): null;
export declare namespace Prompt {
    var displayName: string;
    var propTypes: {
        message: PropTypes.Requireable<string>;
        when: PropTypes.Requireable<boolean>;
    };
}
export interface PromptProps {
    message: string;
    when?: boolean;
}
/**
 * Enables support for the hardware back button on Android.
 */
export declare function useHardwareBackButton(): void;
export { useHardwareBackButton as useAndroidBackButton };
/**
 * Enables deep linking, both on the initial app launch and for
 * subsequent incoming links.
 */
export declare function useDeepLinking(): void;
/**
 * Prompts the user with an Alert before they leave the current screen.
 */
export declare function usePrompt(message: string, when?: boolean): void;
/**
 * A convenient wrapper for accessing individual query parameters via the
 * URLSearchParams interface.
 */
export declare function useSearchParams(defaultInit?: URLSearchParamsInit): (URLSearchParams | ((nextInit: any, navigateOpts: any) => void))[];
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
export declare function createSearchParams(init?: URLSearchParamsInit): URLSearchParams;
export declare type ParamKeyValuePair = [string, string];
export declare type URLSearchParamsInit = string | ParamKeyValuePair[] | Record<string, string | string[]> | URLSearchParams;
