import * as types from '../constants/actionTypes';

export function deployMenu(settings) {
  return {type: types.MENU_DEPLOYED, settings};
}

export function modifyMenuButtonSize(size) {
  return {type: types.MODIFY_MENU_BUTTON_SIZE, size};
}
