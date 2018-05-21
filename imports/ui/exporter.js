import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './body.html';
import { Intent } from '/imports/api/intents';

import { saveAs } from 'file-saver';

Template.exporter.events({
  'click #trn-export'(event) {
    const allIntents = Intent.find();
    let csvData = 'text,intent,language\n';
    let blob = null;

    allIntents.forEach((row) => {
      csvData += `${row.text.replace(/\n/g, ' ')},${row.intent},${(row.lang)? row.lang : 'English'}\n`;
    });
    try {
      blob = new Blob([csvData], {type: 'text/csv;charset=utf-8'});
    } catch (e) {
      alert('Cannot generate data, check console for errors');
      console.log(e);
    }

    if (blob) {
      return saveAs(blob, 'intents_data.csv');
    }
  }
});
