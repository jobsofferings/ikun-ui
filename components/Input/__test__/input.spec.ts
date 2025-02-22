import { tick } from 'svelte';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import KInput from '../src';

let host: HTMLElement;

const initHost = () => {
	host = document.createElement('div');
	host.setAttribute('id', 'host');
	document.body.appendChild(host);
};
beforeEach(() => {
	initHost();
});
afterEach(() => {
	host.remove();
});

describe('Test: KInput', () => {
	test('props: value', async () => {
		const instance = new KInput({
			target: host,
			props: {
				value: 'ikun'
			}
		});
		expect(instance).toBeTruthy();
		const inputElem = host.getElementsByTagName('input')[0];
		expect(inputElem.value).toBe('ikun');
		expect(host.innerHTML).matchSnapshot();
	});

	test('props: iconPrefix', async () => {
		const instance = new KInput({
			target: host,
			props: {
				iconPrefix: 'i-carbon-logo-svelte'
			}
		});
		expect(instance).toBeTruthy();
		const icon = host.getElementsByClassName('k-input--icon')[0];
		expect(icon).toBeTruthy();
		expect(host.innerHTML).matchSnapshot();
	});

	test('props: iconSuffix', async () => {
		const instance = new KInput({
			target: host,
			props: {
				iconSuffix: 'i-carbon-search'
			}
		});
		expect(instance).toBeTruthy();
		const icon = host.getElementsByClassName('k-input--icon')[0];
		expect(icon).toBeTruthy();
		expect(host.innerHTML).matchSnapshot();
	});

	test('props: placeholder', async () => {
		const placeholder = '我见青山多妩媚，料青山见我应如是';
		const instance = new KInput({
			target: host,
			props: {
				placeholder
			}
		});
		expect(instance).toBeTruthy();
		const inputElm = host.getElementsByTagName('input')[0];
		expect(inputElm.placeholder).toEqual(placeholder);
		expect(host.innerHTML).matchSnapshot();
	});

	test('props: disabled', async () => {
		const instance = new KInput({
			target: host,
			props: {
				disabled: true
			}
		});
		expect(instance).toBeTruthy();
		const inputElm = host.getElementsByTagName('input')[0];
		expect(inputElm.disabled).not.toBeNull();
		expect(host.innerHTML).matchSnapshot();
	});

	test('props: cls', async () => {
		const instance = new KInput({
			target: host,
			props: {
				cls: 'ikun'
			}
		});
		expect(instance).toBeTruthy();
		const inputElm = host.getElementsByClassName('k-input--base')[0];
		expect(inputElm.className.includes('ikun')).toBe(true);
		expect(host.innerHTML).matchSnapshot();
	});

	test('props: attrs', async () => {
		const objAttr = {
			name: 'KInput'
		};
		const arrAttr = ['i', 'kun'];
		const instance = new KInput({
			target: host,
			props: {
				attrs: {
					type: 'number',
					strAttr: '你干嘛,哎哟',
					numAttr: 8,
					nullAttr: null,
					undefinedAttr: undefined,
					objAttr,
					arrAttr
				}
			}
		});
		expect(instance).toBeTruthy();
		const inputElm = host.getElementsByTagName('input')[0];
		expect(inputElm.type).toBe('number');
		expect(inputElm.getAttribute('strAttr')).toBe('你干嘛,哎哟');
		expect(inputElm.getAttribute('numAttr')).toBe('8');
		expect(inputElm.getAttribute('nullAttr')).toBeNull();
		expect(inputElm.getAttribute('undefinedAttr')).toBeNull();
		expect(inputElm.getAttribute('objAttr')).not.toEqual(objAttr);
		expect(inputElm.getAttribute('objAttr')).toEqual(objAttr.toString());
		expect(inputElm.getAttribute('arrAttr')).not.toEqual(arrAttr);
		expect(inputElm.getAttribute('arrAttr')).toEqual(arrAttr.toString());
		expect(host.innerHTML).matchSnapshot();
	});

	test('event: should trigger input event', async () => {
		let value = '';
		const mockFn = vi.fn();
		const instance = new KInput({
			target: host,
			props: {
				value
			}
		});
		await tick();
		instance.$on('input', (v) => {
			value = v.detail;
			mockFn();
		});
		const inputElm = host.getElementsByTagName('input')[0];
		inputElm.value = 'ikun';
		inputElm.dispatchEvent(new Event('input'));
		await tick();
		expect(instance).toBeTruthy();
		expect(mockFn).toBeCalled();
		expect(value).toBe('ikun');
	});

	test('event: should trigger enter event when pressing enter', async () => {
		const mockFn = vi.fn();
		const instance = new KInput({
			target: host
		});
		await tick();
		instance.$on('enter', mockFn);
		const inputElm = host.getElementsByTagName('input')[0];
		inputElm.dispatchEvent(
			new KeyboardEvent('keydown', {
				bubbles: true,
				cancelable: true,
				key: 'Enter',
				code: 'Enter'
			})
		);
		await tick();
		expect(mockFn).toBeCalled();
	});

	test('event: should trigger keydown event when not pressing enter', async () => {
		const mockFn = vi.fn();
		const instance = new KInput({
			target: host
		});
		await tick();
		instance.$on('enter', mockFn);
		const inputElm = host.getElementsByTagName('input')[0];
		inputElm.dispatchEvent(
			new KeyboardEvent('keydown', {
				bubbles: true,
				cancelable: true,
				key: 'A',
				code: 'KeyA'
			})
		);
		await tick();
		expect(mockFn).not.toBeCalled();
	});

	test('event: should trigger change event', async () => {
		let value = '';
		const mockFn = vi.fn();
		const instance = new KInput({
			target: host,
			props: {
				value
			}
		});
		await tick();
		instance.$on('change', (v) => {
			value = (v.detail.target as HTMLInputElement).value;
			mockFn();
		});
		const inputElm = host.getElementsByTagName('input')[0];
		inputElm.value = 'ikun';
		inputElm.dispatchEvent(new Event('change'));
		await tick();
		expect(instance).toBeTruthy();
		expect(mockFn).toBeCalled();
		expect(inputElm).toBeTruthy();
		expect(value).toEqual('ikun');
	});
});
