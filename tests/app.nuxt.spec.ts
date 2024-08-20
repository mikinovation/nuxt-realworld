import {it, expect} from 'vitest'
import {setup, $fetch} from '@nuxt/test-utils'

it('can mount some component', async () => {
    await setup({
        server: true
    })

    const html = await $fetch('/api/user')

    expect(html).toContain('handler')
})