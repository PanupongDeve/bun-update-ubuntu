import { $ } from "bun";


export async function updateJS() {
    console.log('------------------- update NPM -------------------')
    console.log('Please mannually run: nvm install --lts')
    console.log('Please mannually run: nvm install-latest-npm')
    // await $`nvm install --lts`;
    // await $`nvm install-latest-npm`;

    console.log('------------------- update BUN -------------------')
    // await $`bun upgrade`;
    await $` curl -fsSL https://bun.sh/install | bash`

   
}