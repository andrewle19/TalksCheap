import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  body: DS.attr('string'),
  timestamp: DS.attr('number')
});