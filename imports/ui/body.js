import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './body.html';
import { Intent } from '/imports/api/intents';

Template.body.helpers({
  intents: [
    {text: 'show_assignments'},
    {text: 'show_2_assignments'},
    {text: 'show_3_assignments'},
    {text: 'show_4_assignments'},
    {text: 'show_5_assignments'},
    {text: 'show_6_assignments'},
    {text: 'show_7_assignments'},
    {text: 'show_n_assignments'},
    {text: 'update_time_cards'},
    {text: 'does_not_look_like_anything'}
  ],
  langs: [
    {text: 'English'},
    {text: 'Dansk'},
    {text: 'Nederlands'},
    {text: 'Français'},
    {text: 'Deutsch'},
    {text: 'Norsk'},
    {text: 'Svenska'},
    {text: 'Español'}
  ]
});

Template.body.events({
  'click #trn-save'(event) {
    const text = document.getElementById('trn-text').value;
    const intent = document.getElementById('trn-intent').value;
    const lang = document.getElementById('trn-lang').value;
    
    if (text) {
      let saved = false;

      try {
        Intent.insert({
          text: text.replace(/\n/g, ' '),
          intent: intent,
          lang: lang
        });
        saved = true;
      } catch (e) {
        console.log(e);
      }
      
      if (saved) {
        alert('Saved data');
      }
      else {
        alert('Error in saving data');
      }
    }
  }
});