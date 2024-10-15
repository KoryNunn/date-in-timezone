# date-in-timezone

## Constructs a `Date` object for a given locale date and time

### `constructDateInTimezone(timeZone, year, month, date, hours, minutes, seconds)`

```js
	const date = constructDateInTimezone('America/Los_Angeles', 2024, 1, 1, 0, 0, 0);

	date.toISOString(); // '2024-01-01T08:00:00.000Z'
	date.toLocaleString('en', { timeZone: 'America/Los_Angeles' });  // '1/1/2024, 12:00:00 AM'
	date1.toLocaleString('en', { timeZone: 'America/Los_Angeles', timeStyle: 'long' }); // '12:00:00 AM PST'
```

This will also handle DST

```js
	const date = constructDateInTimezone('America/Los_Angeles', 2024, 10, 1, 0, 0, 0);

	date.toISOString(); // '2024-10-01T07:00:00.000Z'
	date.toLocaleString('en', { timeZone: 'America/Los_Angeles' });  // '10/1/2024, 12:00:00 AM'
	date1.toLocaleString('en', { timeZone: 'America/Los_Angeles', timeStyle: 'long' }); // '12:00:00 AM PST'
```

### `getTimezoneOffsetMS(timeZone, date)`

Returns the timezone offset in milliseconds for a given date, in a given timezone.

```js
	const offset = getTimezoneOffsetMS('America/Los_Angeles', date);

	getTimezoneOffsetMS('America/Los_Angeles', new Date('2024-01-01T00:00:00Z')); // -28800000
	getTimezoneOffsetMS('America/Los_Angeles', new Date('2024-10-01T00:00:00Z')); // -25200000
```