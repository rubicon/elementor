import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@elementor/ui';

const LandingPageTemplateIcon = React.forwardRef( ( props: SvgIconProps, ref ) => {
	return (
		<SvgIcon viewBox="0 0 24 24" { ...props } ref={ ref }>
			<path fillRule="evenodd" clipRule="evenodd" d="M7 3.5C6.66848 3.5 6.35054 3.6317 6.11612 3.86612C5.8817 4.10054 5.75 4.41848 5.75 4.75V9.25C5.75 9.66421 5.41421 10 5 10C4.58579 10 4.25 9.66421 4.25 9.25V4.75C4.25 4.02065 4.53973 3.32118 5.05546 2.80546C5.57118 2.28973 6.27065 2 7 2H14C14.1989 2 14.3897 2.07902 14.5303 2.21967L19.5303 7.21967C19.671 7.36032 19.75 7.55109 19.75 7.75V9.25C19.75 9.66421 19.4142 10 19 10C18.5858 10 18.25 9.66421 18.25 9.25V8.5H15C14.5359 8.5 14.0908 8.31563 13.7626 7.98744C13.4344 7.65925 13.25 7.21413 13.25 6.75V3.5H7ZM14.75 4.56066L17.1893 7H15C14.9337 7 14.8701 6.97366 14.8232 6.92678C14.7763 6.87989 14.75 6.8163 14.75 6.75V4.56066ZM5 11C5.41421 11 5.75 11.3358 5.75 11.75V12.25C5.75 12.6642 5.41421 13 5 13C4.58579 13 4.25 12.6642 4.25 12.25V11.75C4.25 11.3358 4.58579 11 5 11ZM18.25 12.25V11.75C18.25 11.3358 18.5858 11 19 11C19.4142 11 19.75 11.3358 19.75 11.75V12.25C19.75 12.6642 19.4142 13 19 13C18.5858 13 18.25 12.6642 18.25 12.25ZM5 14.5C5.41421 14.5 5.75 14.8358 5.75 15.25V15.75C5.75 16.1642 5.41421 16.5 5 16.5C4.58579 16.5 4.25 16.1642 4.25 15.75V15.25C4.25 14.8358 4.58579 14.5 5 14.5ZM18.25 15.75V15.25C18.25 14.8358 18.5858 14.5 19 14.5C19.4142 14.5 19.75 14.8358 19.75 15.25V15.75C19.75 16.1642 19.4142 16.5 19 16.5C18.5858 16.5 18.25 16.1642 18.25 15.75ZM5 18C5.41421 18 5.75 18.3358 5.75 18.75C5.75 19.0815 5.8817 19.3995 6.11612 19.6339C6.35054 19.8683 6.66848 20 7 20H17C17.3315 20 17.6495 19.8683 17.8839 19.6339C18.1183 19.3995 18.25 19.0815 18.25 18.75C18.25 18.3358 18.5858 18 19 18C19.4142 18 19.75 18.3358 19.75 18.75C19.75 19.4793 19.4603 20.1788 18.9445 20.6945C18.4288 21.2103 17.7293 21.5 17 21.5H7C6.27065 21.5 5.57118 21.2103 5.05546 20.6945C4.53973 20.1788 4.25 19.4793 4.25 18.75C4.25 18.3358 4.58579 18 5 18Z" />
		</SvgIcon>
	);
} );

export default LandingPageTemplateIcon;
