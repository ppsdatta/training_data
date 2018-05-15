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
    {text: 'update_time_cards'}
  ]
});

Template.body.events({
  'click #trn-save'(event) {
    const text = document.getElementById('trn-text').value;
    const intent = document.getElementById('trn-intent').value;
    
    if (text) {
      Intent.insert({
        text: text,
        intent: intent
      })
    }
  }
})