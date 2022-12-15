import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'NotificationsFilledIcon',
  props: {},
  functional: true,

  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 28 28"
      },
      "class": "c-pieIcon c-pieIcon--notificationsFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14 27.125C14.8607 27.1234 15.7029 26.8753 16.427 26.4101C17.1512 25.9449 17.7269 25.2821 18.0862 24.5H9.91374C10.2731 25.2821 10.8488 25.9449 11.573 26.4101C12.2971 26.8753 13.1393 27.1234 14 27.125Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M24.6925 19.0837C23.7926 18.1889 23.0799 17.1237 22.5962 15.9504C22.1124 14.777 21.8673 13.5191 21.875 12.25V11.375C21.8741 9.43857 21.1597 7.57037 19.8684 6.12735C18.5771 4.68432 16.7994 3.76766 14.875 3.5525V0.875H13.125V3.5525C11.1679 3.82866 9.37825 4.80767 8.09012 6.30672C6.802 7.80577 6.10349 9.7224 6.125 11.6987V12.25C6.12926 13.5147 5.88241 14.7677 5.39876 15.9362C4.91511 17.1048 4.20428 18.1657 3.3075 19.0575L2.625 19.7663V22.75H25.375V19.7663L24.6925 19.0837Z"
      }
    })]);
  }

};