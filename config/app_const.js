module.exports = {
    app_name: 'Magnaconnect',
    secret: process.env.SECRET,
    mailer: process.env.MAILER,
    pass: process.env.PASS,
    saltRounds: 10,
    //All table added here
    //phase-I---------------Start 01stJune2020
    tatoken: 'tbl_access_token',
    tuser: 'tbl_user',
    tcustomer: 'tbl_customer',
    taddress: 'tbl_address',
    tcountry: 'tbl_country_master',
    tstate: 'tbl_state',
    tcity: 'tbl_city',
    tstore: 'tbl_store_master',
    tcategory: 'tbl_category',
    tproduct: 'tbl_product',
    tpitem: 'tbl_product_item',
    tpimage: 'tbl_product_image',
    tpcategory: 'tbl_popular_category',
    tpproduct: 'tbl_popular_product',

    tcart: 'tbl_cart',
    tcproduct: 'tbl_cart_product',
    torder: 'tbl_order',
    topp: 'tbl_order_product_purchased',

    tpayment: 'tbl_payment_master',
    tpaccount: 'tbl_payment_account',
    twallet: 'tbl_wallet',
    toffer: 'tbl_offer',
    tcoupon: 'tbl_coupon',
    tnotification: 'tbl_notification',

    //phase-II---------------After 20thJune2020
    tduser: 'tbl_deliv_user',
    tdaddress: 'tbl_deliv_address',
    tdorder: 'tbl_deliv_order',
    tdopp: 'tbl_deliv_order_purchased',
    tdmanager: 'tbl_deliv_manager',

    //simple queries --------------
    q_select: 'SELECT * FROM ??',
    qwhere: "SELECT * FROM ?? WHERE ??=?",
    qwwhere: "SELECT * FROM ?? WHERE ??=? AND ??=?",
    qwherem: "SELECT user_mobile FROM ?? WHERE ??=?",
    qinsert: "INSERT INTO ?? SET ?",
    // qupdate: "UPDATE ?? SET ??=? WHERE ??=?",

    //All String added here---------------
    MSG_INTERNAL_ERR: 'Internal server error!',
    MSG_ERROR: 'Error',
    MSG_SUCCESS: 'Success',

    //All funtion added here--------------
    getTable: function getTableName(params) {
        switch (params.table_name) {
            case 1011:
                return this.tuser;
            case 1012:
                return this.taddress;
            case 1013:
                return this.tcountry;
            case 1014:
                return this.tstate;
            case 1015:
                return this.tcity;
            case 1016:
                return this.tstore;
            case 1017:
                return this.tcategory;
            case 1018:
                return this.tproduct;
            case 1019:
                return this.tpitem;
            case 1011:
                return this.tpimage;
            case 1012://popular
                return this.tpcategory;
            case 1013:
                return this.tpproduct;
            case 1014://cart
                return this.tcart;
            case 1015:
                return this.tcproduct;
            case 1016://Order
                return this.torder;
            case 1017:
                return this.topp;
            case 1018://payment
                return this.tpayment;
            case 1019:
                return this.tpaccount;
            case 1020://wallet
                return this.twallet;
            case 1021:
                return this.toffer;
            case 1022:
                return this.tcoupon;
            case 1023:
                return this.tnotification;
            case 1024://delivery
                return this.tduser;
            case 1025:
                return this.tdaddress;            
            case 1026:
                return this.tcustomer;

            default:
                return '';
        }
    }
};