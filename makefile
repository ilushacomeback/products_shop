start-server:
	cd server && npm run dev

start-frontend:
	cd frontend && make dev

dev:
	make start-server & make start-frontend