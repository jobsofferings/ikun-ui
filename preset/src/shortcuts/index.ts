import type { Theme } from '@unocss/preset-uno';
import type { UserShortcuts } from 'unocss';
import { baseShortcuts } from './base';
import { commonShortcuts } from './common';
import { iconShortcuts } from './icon';
import { avatarShortcuts } from './avatar';
import { badgeShortcuts } from './badge';
import { breadcrumbShortcuts } from './breadcrumb';
import { breadcrumbItemShortcuts } from './breadcrumb-item';
import { buttonShortcuts } from './button';
import { buttonGroupShortcuts } from './button-group';
import { collapseShortcuts } from './collapse';
import { checkboxShortcuts } from './checkbox';
import { drawerShortcuts } from './drawer';
import { maskShortcuts } from './mask';
import { eyeDropperShortcuts } from './eye-dropper';
import { inputShortcuts } from './input';
import { popoverShortcuts } from './popover';
import { radioShortcuts } from './radio';
import { modalShortcuts } from './modal';
import { tagShortcuts } from './tag';
import { notificationShortcuts } from './notification';
import { switchShortcuts } from './swtich';
import { selectShortcuts } from './select';
import { msgBoxShortcuts } from './message-box';
import { spinShortcuts } from './spin';

export default [
	baseShortcuts,
	commonShortcuts,
	// icon
	iconShortcuts,
	// avatar
	avatarShortcuts,
	// badge
	badgeShortcuts,
	// breadcrumb
	breadcrumbShortcuts,
	// breadcrumb item
	breadcrumbItemShortcuts,
	// button
	buttonShortcuts,
	// button group
	buttonGroupShortcuts,
	// collapse
	collapseShortcuts,
	// checkbox
	checkboxShortcuts,
	// drawer
	drawerShortcuts,
	// mask
	maskShortcuts,
	// eyeDropper
	eyeDropperShortcuts,
	// input
	inputShortcuts,
	// popover
	popoverShortcuts,
	// radio
	radioShortcuts,
	// modal
	modalShortcuts,
	// tag
	tagShortcuts,
	// notification
	notificationShortcuts,
	// switch
	switchShortcuts,
	// select
	selectShortcuts,
	// message box
	msgBoxShortcuts,
	// spin
	spinShortcuts
] as UserShortcuts<Theme>;

export function getSafeList() {
	const iconList = Object.keys(iconShortcuts);
	const avatarList = Object.keys(avatarShortcuts);
	const badgeList = Object.keys(badgeShortcuts);
	const breadcrumbList = Object.keys(breadcrumbShortcuts);
	const breadcrumbItemList = Object.keys(breadcrumbItemShortcuts);
	const buttonList = Object.keys(buttonShortcuts);
	const buttonGroupList = Object.keys(buttonGroupShortcuts);
	const collapseList = Object.keys(collapseShortcuts);
	const checkboxList = Object.keys(checkboxShortcuts);
	const drawerList = Object.keys(drawerShortcuts);
	const inputList = Object.keys(inputShortcuts);
	const maskList = Object.keys(maskShortcuts);
	const eyeDropperList = Object.keys(eyeDropperShortcuts);
	const popoverList = Object.keys(popoverShortcuts);
	const radioList = Object.keys(radioShortcuts);
	const modalList = Object.keys(modalShortcuts);
	const tagList = Object.keys(tagShortcuts);
	const notificationList = Object.keys(notificationShortcuts);
	const switchList = Object.keys(switchShortcuts);
	const selectList = Object.keys(selectShortcuts);
	const msgBoxList = Object.keys(msgBoxShortcuts);
	const spinList = Object.keys(spinShortcuts);
	return iconList
		.concat(msgBoxList)
		.concat(selectList)
		.concat(switchList)
		.concat(notificationList)
		.concat(tagList)
		.concat(modalList)
		.concat(popoverList)
		.concat(radioList)
		.concat(drawerList)
		.concat(inputList)
		.concat(maskList)
		.concat(eyeDropperList)
		.concat(avatarList)
		.concat(badgeList)
		.concat(breadcrumbList)
		.concat(breadcrumbItemList)
		.concat(buttonList)
		.concat(buttonGroupList)
		.concat(collapseList)
		.concat(checkboxList)
		.concat(spinList);
}

export { baseShortcuts } from './base';
export { commonShortcuts } from './common';
export { iconShortcuts } from './icon';
export { avatarShortcuts } from './avatar';
export { badgeShortcuts } from './badge';
export { breadcrumbShortcuts } from './breadcrumb';
export { breadcrumbItemShortcuts } from './breadcrumb-item';
export { buttonShortcuts } from './button';
export { buttonGroupShortcuts } from './button-group';
export { collapseShortcuts } from './collapse';
export { checkboxShortcuts } from './checkbox';
export { drawerShortcuts } from './drawer';
export { maskShortcuts } from './mask';
export { eyeDropperShortcuts } from './eye-dropper';
export { inputShortcuts } from './input';
export { popoverShortcuts } from './popover';
export { radioShortcuts } from './radio';
export { modalShortcuts } from './modal';
export { tagShortcuts } from './tag';
export { notificationShortcuts } from './notification';
export { switchShortcuts } from './swtich';
export { selectShortcuts } from './select';
export { msgBoxShortcuts } from './message-box';
export { spinShortcuts } from './spin';
