.PHONY: docker-build-push

docker-build-push:
	@docker login
	@docker buildx build --platform linux/amd64,linux/arm64 -t tzq0301/tzq-index:latest --push .