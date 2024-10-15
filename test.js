const assert = require('node:assert');
const { test } = require('node:test');
const { constructDateInTimezone, getTimezoneOffsetMS } = require('./');

test('constructDateInTimezone - Correctly handles DST', t => {
	t.plan(6);

	const date1 = constructDateInTimezone('America/Los_Angeles', 2024, 1, 1, 0, 0, 0);

	t.assert.equal(date1.toISOString(), '2024-01-01T08:00:00.000Z');
	t.assert.equal(date1.toLocaleString('en', { timeZone: 'America/Los_Angeles' }), '1/1/2024, 12:00:00 AM');
	t.assert.equal(date1.toLocaleString('en', { timeZone: 'America/Los_Angeles', timeStyle: 'long' }), '12:00:00 AM PST');

	const date2 = constructDateInTimezone('America/Los_Angeles', 2024, 10, 1, 0, 0, 0);

	t.assert.equal(date2.toISOString(), '2024-10-01T07:00:00.000Z');
	t.assert.equal(date2.toLocaleString('en', { timeZone: 'America/Los_Angeles' }), '10/1/2024, 12:00:00 AM');
	t.assert.equal(date2.toLocaleString('en', { timeZone: 'America/Los_Angeles', timeStyle: 'long' }), '12:00:00 AM PDT');
});

test('getTimezoneOffsetMS - Correctly handles DST', t => {
	t.plan(2);
	const offset1 = getTimezoneOffsetMS('America/Los_Angeles', new Date('2024-01-01T00:00:00Z'));
	t.assert.equal(offset1, -28800000);

	const offset2 = getTimezoneOffsetMS('America/Los_Angeles', new Date('2024-10-01T00:00:00Z'));
	t.assert.equal(offset2, -25200000);
});