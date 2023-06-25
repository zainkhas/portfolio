declare module "react-images-viewer" {
  import React from "react";

  export interface IReactImagesViewerProps {
    /** Allow users to exit the viewer by clicking the backdrop (default: `false`) */
    backdropCloseable?: boolean;
    /** Customize close esc title */
    closeBtnTitle?: string;
    /** Supports keyboard input - `space, esc`, `arrow left, arrow up`, and `arrow right, arrow down` (default: `true`) */
    enableKeyboardInput?: boolean;
    /** Required if you want to navigate the imgsViewer, The index of the image to display initially (default: `0`) */
    currImg?: number;
    /** An array of elements to display as custom controls on the top of viewer */
    customControls?: JSX.Element[];
    /** Array of image objects */
    imgs: IImgObjects[];
    /** Customize separator in the image count (default: `' / '`) */
    imgCountSeparator?: string;
    /** Required if you want to navigate the imgsViewer, Whether or not the viewer is displayed (default: `false`) */
    isOpen?: boolean;
    /** Customize of left arrow title */
    leftArrowTitle?: string;
    /** Required if you want to navigate the imgsViewer, and fired on request of the previous image */
    onClickPrev?: () => void;
    /** Required if you want to navigate the imgsViewer, and fired on request of the next image */
    onClickNext?: () => void;
    /** Required if you want to close the imgsViewer, and handle closing of the viewer */
    onClose?: () => void;
    /** Handle click on current image */
    onClickImg?: () => void;
    /** Handle click on thumbnail */
    onClickThumbnail?: () => void;
    /** Whether to preload the next available image (default: `true`) */
    preloadNextImg?: boolean;
    /** Customize right arrow title */
    rightArrowTitle?: string;
    /** Optionally display a close 'X' button in top right corner (default: `true`) */
    showCloseBtn?: boolean;
    /** Optionally display image index, e.g., "2 of 20" (default: `true`) */
    showImgCount?: boolean;
    /** Maximum width of the carousel; defaults to 1024px */
    width?: number;
    /** Disable Spinner (default: `false`) */
    spinnerDisabled?: boolean;
    /** Spinner component class (default: `DefaultSpinner`) */
    spinner?: React.ReactNode;
    /** Color of spinner */
    spinnerColor?: string;
    /** Size of spinner (default: `50`) */
    spinnerSize?: number;
    /** Determines whether auto-scrolling is prevented (default: `true`) */
    preventAutoScroll?: boolean;
  }

  export interface IImgObjects {
    src: string;
    caption?: string;
    srcSet?: string | string[];
    alt?: string;
  }

  const ImgsViewer: React.FC<IReactImagesViewerProps>;

  export default ImgsViewer;
}
