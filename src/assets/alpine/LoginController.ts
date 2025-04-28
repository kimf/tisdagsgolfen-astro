import Alpine from 'alpinejs';
document.addEventListener('alpine:init', () => {
  Alpine.data('login', () => ({
    userId: 0,

    toggleUserId(id: number) {
      if (this.userId === id) {
        this.userId = 0;
      } else {
        this.userId = id;
      }
    },

    canLogin() {
      return this.userId > 0;
    },

    isUser(id: number) {
      return this.userId === id;
    },

    isAnotherUser(id: number) {
      return this.userId !== 0 && this.userId !== id;
    }
  }));
});
