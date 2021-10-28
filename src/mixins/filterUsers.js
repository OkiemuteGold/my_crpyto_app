import users from "@/data/users.js";

export const filterUsers = {
    data() {
        return {
            sortCriteria: "",
            users,
        };
    },
    methods: {
        filter_active_inactive() {
            if (this.status != null) {
                var status = this.status;
                return this.users.filter(function (users) {
                    return users.status == status;
                });
            } else {
                return this.users;
            }
        },
        sort_by(users, sortProp) {
            return users.sort(function (a, b) {
                if (a[sortProp] > b[sortProp]) return 1;
                if (a[sortProp] < b[sortProp]) return -1;
                return 0;
            });
        }
    },
    computed: {
        sortedUsers() {
            if (!this.sortCriteria) {
                this.sortCriteria = "created_at";
            }
            return this.sort_by(this.filter_active_inactive(), this.sortCriteria);
        },
        userProperties() {
            let arr = [];
            for (let prop in this.users[0]) {
                arr.push(prop);
            }
            return arr;
        }
    }
};