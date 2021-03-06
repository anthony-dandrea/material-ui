import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '{{{ muiRequireStmt }}}';

let {{className}} = (props) => (
  <SvgIcon {...props}>
    {{{paths}}}
  </SvgIcon>
);
{{className}} = pure({{className}});
{{className}}.displayName = '{{className}}';

export default {{className}};
