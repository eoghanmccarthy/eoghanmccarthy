import { isDarwin, getShortcutKey } from './keys'

const shortcutMap = {
  cut: [getShortcutKey('CtrlOrCmd+X')],
  copy: [getShortcutKey('CtrlOrCmd+C')],
  paste: [getShortcutKey('CtrlOrCmd+V')],
  copyStyles: [getShortcutKey('CtrlOrCmd+Alt+C')],
  pasteStyles: [getShortcutKey('CtrlOrCmd+Alt+V')],
  selectAll: [getShortcutKey('CtrlOrCmd+A')],
  deleteSelectedElements: [getShortcutKey('Del')],
  duplicateSelection: [getShortcutKey('CtrlOrCmd+D')],
  sendBackward: [getShortcutKey('CtrlOrCmd+[')],
  bringForward: [getShortcutKey('CtrlOrCmd+]')],
  sendToBack: [
    isDarwin
      ? getShortcutKey('CtrlOrCmd+Alt+[')
      : getShortcutKey('CtrlOrCmd+Shift+['),
  ],
  bringToFront: [
    isDarwin
      ? getShortcutKey('CtrlOrCmd+Alt+]')
      : getShortcutKey('CtrlOrCmd+Shift+]'),
  ],
  copyAsPng: [getShortcutKey('Shift+Alt+C')],
  copyAsSvg: [],
  group: [getShortcutKey('CtrlOrCmd+G')],
  ungroup: [getShortcutKey('CtrlOrCmd+Shift+G')],
  gridMode: [getShortcutKey("CtrlOrCmd+'")],
  zenMode: [getShortcutKey('Alt+Z')],
  stats: [getShortcutKey('Alt+/')],
  addToLibrary: [],
  flipHorizontal: [getShortcutKey('Shift+H')],
  flipVertical: [getShortcutKey('Shift+V')],
  viewMode: [getShortcutKey('Alt+R')],
}

export const getShortcutFromShortcutName = (name) => {
  const shortcuts = shortcutMap[name]
  // if multiple shortcuts available, take the first one
  return shortcuts && shortcuts.length > 0 ? shortcuts[0] : ''
}
