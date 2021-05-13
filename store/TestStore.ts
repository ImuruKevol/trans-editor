import { action, observable } from "mobx";

class TestStore {
  @observable
  searchOverlayOpen = false;

  @action
  setSearchOverlayOpen(value) {
    this.searchOverlayOpen = value;
  }
}

export default TestStore;
