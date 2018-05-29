<template>
    <span class="flag-icon" :class="[flagIconClass, flagIconSize]">
    </span>
</template>

<script>
import isNil from 'lodash/isNil'

export default {
  name: 'FlagIcon',
  props: ['iso', 'size'],
  computed: {
    flagIconClass () {
      return `flag-icon-${this.iso.toLowerCase()}`
    },
    flagIconSize () {
      if (isNil(this.size)) {
        return 'flag-icon-1'
      } else {
        return `flag-icon-${this.size}`
      }
    }
  }
}
</script>

<style>
    .flag-icon-background {
        background-size: contain;
        background-position: 50%;
        background-repeat: no-repeat;
    }

    .flag-icon {
        background-size: contain;
        background-position: 50%;
        background-repeat: no-repeat;
        position: relative;
        display: inline-block;
    }

    .flag-icon-2 {
        width: 2rem;
        line-height: 1.5rem;
    }

    .flag-icon-3 {
        width: 2.66666rem;
        line-height: 2rem;
    }

    .flag-icon:before {
        content: "\00a0";
    }

    .flag-icon-de {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgwIiB3aWR0aD0iNjQwIiBpZD0iZmxhZy1pY29uLWNzcy1kZSI+CiAgPHBhdGggZmlsbD0iI2ZmY2UwMCIgZD0iTTAgMzIwaDY0MHYxNjAuMDAySDB6Ii8+CiAgPHBhdGggZD0iTTAgMGg2NDB2MTYwSDB6Ii8+CiAgPHBhdGggZmlsbD0iI2QwMCIgZD0iTTAgMTYwaDY0MHYxNjBIMHoiLz4KPC9zdmc+");
    }

    .flag-icon-en {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgwIiB3aWR0aD0iNjQwIiBpZD0iZmxhZy1pY29uLWNzcy1nYiI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImEiPgogICAgICA8cGF0aCBmaWxsLW9wYWNpdHk9Ii42NyIgZD0iTS04NS4zMzMgMGg2ODIuNjd2NTEyaC02ODIuNjd6Ii8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8ZyBjbGlwLXBhdGg9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgwKSBzY2FsZSguOTQpIj4KICAgIDxnIHN0cm9rZS13aWR0aD0iMXB0Ij4KICAgICAgPHBhdGggZmlsbD0iIzAwNiIgZD0iTS0yNTYgMEg3NjguMDJ2NTEyLjAxSC0yNTZ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0tMjU2IDB2NTcuMjQ0bDkwOS41MzUgNDU0Ljc2OEg3NjguMDJWNDU0Ljc3TC0xNDEuNTE1IDBILTI1NnpNNzY4LjAyIDB2NTcuMjQzTC0xNDEuNTE1IDUxMi4wMUgtMjU2di01Ny4yNDNMNjUzLjUzNSAwSDc2OC4wMnoiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggZD0iTTE3MC42NzUgMHY1MTIuMDFoMTcwLjY3VjBoLTE3MC42N3pNLTI1NiAxNzAuNjd2MTcwLjY3SDc2OC4wMlYxNzAuNjdILTI1NnoiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggZD0iTS0yNTYgMjA0LjgwNHYxMDIuNDAySDc2OC4wMlYyMDQuODA0SC0yNTZ6TTIwNC44MSAwdjUxMi4wMWgxMDIuNFYwaC0xMDIuNHpNLTI1NiA1MTIuMDFMODUuMzQgMzQxLjM0aDc2LjMyNGwtMzQxLjM0IDE3MC42N0gtMjU2ek0tMjU2IDBMODUuMzQgMTcwLjY3SDkuMDE2TC0yNTYgMzguMTY0VjB6bTYwNi4zNTYgMTcwLjY3TDY5MS42OTYgMGg3Ni4zMjRMNDI2LjY4IDE3MC42N2gtNzYuMzI0ek03NjguMDIgNTEyLjAxTDQyNi42OCAzNDEuMzRoNzYuMzI0TDc2OC4wMiA0NzMuODQ4djM4LjE2MnoiIGZpbGw9IiNjMDAiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==")
    }
</style>
