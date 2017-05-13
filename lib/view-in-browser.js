'use babel'

import ViewInBrowserView from './view-in-browser-view'
import { CompositeDisposable } from 'atom'

export default {

  viewInBrowserView: null,
  modalPanel: null,
  subscriptions: null,

  activate (state) {
    // this.viewInBrowserView = new ViewInBrowserView(state.viewInBrowserViewState)
    // this.modalPanel = atom.workspace.addModalPanel({
    //   item: this.viewInBrowserView.getElement(),
    //   visible: false
    // })

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'view-in-browser:toggle': () => this.toggle()
    }))
  },

  deactivate () {
    // this.modalPanel.destroy()
    this.subscriptions.dispose()
    // this.viewInBrowserView.destroy()
  },

  serialize () {
    return {
      viewInBrowserViewState: this.viewInBrowserView.serialize()
    }
  },

  toggle () {
    // console.log(atom.keymaps.getKeyBindings())
    alert('hi')
    // return (
    //   this.modalPanel.isVisible() ? this.modalPanel.hide() : this.modalPanel.show()
    // )
  }

}
