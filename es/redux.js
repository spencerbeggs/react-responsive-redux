import _extends from "@babel/runtime/helpers/extends";
import { breakPoints } from './defaults';
export var SET_MOBILE_DETECT = '@@react-responsive-redux/SET_MOBILE_DETECT';
export var setMobileDetect = function setMobileDetect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      phone = _ref.phone,
      tablet = _ref.tablet,
      mobile = _ref.mobile,
      desktop = _ref.desktop;

  return {
    type: SET_MOBILE_DETECT,
    phone: phone,
    tablet: tablet,
    mobile: mobile,
    desktop: desktop
  };
}; // TODO - allow users to pass this in - we have to share it with our components
// too though so maybe we need a getter/setter on our entire class?
// default to a desktop size if in doubt

export var defaultSize = breakPoints.dektop;
export var initialState = {
  phone: false,
  tablet: false,
  mobile: false,
  desktop: false,
  fakeWidth: defaultSize
};
export var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_MOBILE_DETECT:
      {
        // use initialState as the default values
        var _initialState$action = _extends({}, initialState, action),
            mobile = _initialState$action.mobile,
            tablet = _initialState$action.tablet,
            phone = _initialState$action.phone,
            desktop = _initialState$action.desktop;

        var fakeWidth;

        if (mobile) {
          if (phone) {
            fakeWidth = breakPoints.phone;
          } else if (tablet) {
            fakeWidth = breakPoints.tablet;
          } else {
            // TODO - should we ever get here? default to the lowest value i guess
            fakeWidth = breakPoints.phone;
          }
        } else if (desktop) {
          fakeWidth = breakPoints.desktop;
        } else {
          // nothing set, default to our defaultSize
          fakeWidth = defaultSize;
        }

        return _extends({}, state, {
          mobile: mobile,
          tablet: tablet,
          phone: phone,
          desktop: desktop,
          fakeWidth: fakeWidth
        });
      }

    default:
      return state;
  }
};
//# sourceMappingURL=redux.js.map