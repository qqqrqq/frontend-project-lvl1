install:	install  dep
	 npm ci
brain-games:  start game
	node bin/brain-games.js
publish: publish
	npm publish --dry-run