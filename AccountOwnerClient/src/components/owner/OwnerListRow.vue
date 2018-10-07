<template>
    <tr>
        <td>{{ owner.name }}</td>
        <td>{{ owner.address }}</td>
        <td>{{ owner.dateOfBirth }}</td>
        <td>
            <b-button variant="default">Details</b-button>
        </td>
        <td>
            <b-button variant="success">Update</b-button>
        </td>
        <td>
            <b-button variant="danger">Delete</b-button>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'OwnerListRow',
    props: [ 'owner' ]
}
</script>

<style>

</style>
