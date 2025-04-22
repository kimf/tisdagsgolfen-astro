import Alpine from 'alpinejs';
document.addEventListener('alpine:init', () => {
  Alpine.data('login', () => ({
    userId: 0,

    setUserId(id: number) {
      this.userId = id;
    },

    canLogin() {
      return this.userId > 0;
    },

    isUser(id: number) {
      return this.userId === id;
    }
  }));
});
