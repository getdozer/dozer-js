## Getting Started

1. Generate a master token for auth by running the command from the project root directory where `dozer-config.yaml` is located:
```bash
dozer security generate-token
```

2.  Copy the `MASTER_TOKEN` generated from the previous step and write the `MASTER_TOKEN` to .env
```bash
echo "MASTER_TOKEN=your_token_here" > .env
```

3. Start the Dozer app. Dozer will start running, handling the data operations and APIs authorization as defined in your configuration. To do this, simply run the command:

```bash
source .env
# rm -rf .dozer dozer.lock
dozer run
```

4. Start the ingest script

```bash
node src/ingest/ingest.js
```


5. Run node demo script

```bash
node src/auth/getAuthToken.js
```
