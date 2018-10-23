/* eslint-disable */ 
    import {assignImportedComponents} from 'react-imported-component';
    const applicationImports = {
      0: () => import('./Views/Login'),
1: () => import('./Views/ResetPassword'),
2: () => import('./Views/Dashboard'),
    };
    assignImportedComponents(applicationImports);
    export default applicationImports;