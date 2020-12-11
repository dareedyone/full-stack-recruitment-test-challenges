const makeDictionary = arr =>
  arr.reduce((memo, ent) => ({ ...memo, [ent.id]: ent }), {});

const populateLegs = (itinenaries, allLegs) =>
  itinenaries.map(i => ({
    ...i,
    legs: i.legs.reduce((m, e) => [...m, allLegs[e]], []),
    // totalStops: i.legs.reduce((m, e) => allLegs[e].stops + m, 0),
  }));

const getStopString = (stops, type) => {
  if (type === 'class' && stops === 0) return 'direct';
  if (type === 'class' && stops > 0) return 'stop';

  const stopObj = { 0: 'Direct', 1: `${stops} Stop` };
  const stopString = stopObj[stops];
  return stopString ? stopString : `${stops} Stops`;
};

const addZero = time =>
  time.toString().length === 1 ? `0${time.toString()}` : time.toString();

const formatTo24hours = date => {
  date = new Date(date);
  return `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
};
const formatToHoursMin = num => `${Math.floor(num / 60)}h ${num % 60}`;

export default {
  makeDictionary,
  populateLegs,
  getStopString,
  formatTo24hours,
  formatToHoursMin,
};
