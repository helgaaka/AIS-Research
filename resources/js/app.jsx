// resources/js/app.jsx
import './bootstrap';
import { createInertiaApp } from '@inertiajs/inertia-react';
import React from 'react';
import { render } from 'react-dom';

createInertiaApp({
    resolve: name => import(`./Pages/${name}.jsx`), // Mengarah ke Pages
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});
