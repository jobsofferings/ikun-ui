<script>
    import { KSwitch } from '@ikun-ui/switch'
    let value = false
    const handleUpdate = (e) => {
        value = e.detail
    }
</script>
<div class="flex items-center flex-wrap">
    <KSwitch value={value} on:updateValue = {handleUpdate} />
    <span class="ml-2">{value}</span>
</div>

