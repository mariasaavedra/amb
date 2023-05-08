
import React from "react";// Example: Load Rails libraries in Vite.
import * as Turbo from '@hotwired/turbo'
import * as ActiveStorage from '@rails/activestorage'
import { render } from 'react-dom';
import App from '../components/App.tsx';


// Import all channels.
import.meta.globEager('../channels/**/*_channel.js')

Turbo.start()
ActiveStorage.start()

console.log('Visit the guide for more information: ', 'https://vite-ruby.netlify.app/guide/rails')

document.addEventListener('turbo:load', () => {
    render(<App />, document.getElementById('root'));
});