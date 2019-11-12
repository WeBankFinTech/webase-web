export default {
    login: {
        user: "账号",
        password: "密码",
        verificationCode: "验证码",
        login: "登录"
    },
    inputText: {
        user: "请输入账号",
        password: "请输入密码",
        verificationCode: "请输入验证码",
        blockInput: "请输入区块哈希或块高",
        contractSearch: "请输入合约名或合约地址"
    },
    text: {
        reqOvertime: "请求超时",
        loginFail: "登陆失败",
        systemError: "系统错误",
        copy: "复制",
        arrow: "箭头",
        copyErrorMsg: "key为空，不复制。",
        copySuccessMsg: "复制成功",
        copyHash: "复制哈希",
        total: "共",
        tiao: "条",
        blockSearchMsg: "搜索区块哈希不支持模糊查询",
        delete: "删除",
        update: "修改",
        confirmDelete: "确认删除？",
        sure: "确定",
        cancel: "取消",
        select: "请选择",
        tips: "提示",
        updateSuccessMsg: "修改成功",
        save: "保存",
        compile: "编译",
        deploy: "部署",
        send: "发交易",
        selectSuccess: "查询成功！",
        transactionSuccess: "交易成功！",
        transactionFail: "交易失败！",
        noData: "暂无数据"
    },
    rule: {
        textLong: "长度在 1 到 32 个字符",
        passwordError: "登录密码错误",
        loginPasswordType: "请正确输入密码",
        ipName: "请输入ip名称",
        ipRule: "ip不符合规则",
        portName: "请输入端口名称",
        portLong: "长度在 1 到 12 个数字",
        portRule: "端口不符合规则",
        agencyName: "请输入机构名称",
        agencyLong: "长度在 1 到 16 位",
        agencyRule: "机构名称请输入中文、英文和数字",
        adminRule: "请选择管理员账号",
        nodeType: "请选择节点类型",
        contractName: "请输入合约名称",
        contractLong: "长度在 1 到 32 个字符",
        contractRule: "合约名不符合规则",
        folderName: "请输入文件夹名称",
        folderLong: "长度在 1 到 12 个字符",
        folderRule: "文件夹名不符合规则"
    },
    head: {
        helpText: "帮助文档",
        group: "群组",
        changePassword: "修改密码",
        exit: "退出"
    },
    title: {
        dataOverview: "数据概览",
        blockTitle: "区块信息",
        nodeTitle: "节点管理",
        contractTitle: "合约管理",
        contractIDE: "合约IDE",
        contractList: "合约列表"
    },
    home: {
        nodes: "节点个数",
        contracts: "已部署的智能合约",
        blocks: "区块数量",
        transactions: "交易数量",
        nodeId: "节点Id",
        blockHeight: "块高",
        pbftView: "pbftView",
        status: "状态",
        block: "区块",
        transaction: "交易",
        tranfer: "出块者",
        more: "更多",
        run: "运行",
        unusual: "异常",
        chartTitle: "关键监控指标",
        chartExplain: "最近有交易的7天交易量（笔）",
        chartTransactions: "交易量",
        blockHash: "区块哈希",
        createTime: "创建时间"
    },
    nodes: {
        nodeFront: "节点前置",
        addFront: "新增节点前置",
        frontId: "前置编号",
        ip: "ip",
        frontPort: "前置端口",
        agency: "所属机构",
        modifyTime: "修改时间",
        nodeStyle: "节点类型",
        operation: "操作",
        sealer: "共识",
        observer: "观察",
        remove: "游离",
        deleteNode: "删除节点",
        nodeList: "节点列表",
        nodeDescription: "节点管理说明：可以通过节点管理设置节点类型。包括：1、根据节点NodeID设置对应节点为共识节点。2、 根据节点NodeID设置对应节点为观察节点。3、根据节点NodeID设置对应节点为游离节点。",
        updateNodesType: "修改节点类型",
        frontConfig: "节点前置配置",
        addFrontSuccessMsg: "添加前置成功",
        addFrontErrMsg: "添加前置失败",
        admin: "管理员账号",
        observerText: "设置为观察节点，节点将不参与共识",
        removeText: "设置为游离节点，节点将不参与共识和同步",
        sealerText: "设置为共识节点，节点将参与共识。请联系专业人员设置"
    },
    contracts: {
        createFile: "新建文件",
        createFolder: "新建文件夹",
        upLoadFile: "上传文件",
        contractTips: "群组内部署的合约都需要在合约管理里添加，编译保存，否则会判断为异常合约。",
        rename: "重命名",
        contractCompileSuccess: "合约编译成功！",
        contractCompileFail: "合约编译失败！",
        renameFail: "已部署的合约不能重新命名！",
        nameFail: "同目录下存在相同的合约，请重新命名!",
        contractLong: "请输入数字或字母,长度为1到32位！",
        contractSize: "文件大小超过400k，请上传小于400k的文件!",
        contractType: "请上传.sol格式的文件!",
        contractNameSameFail: "同一目录下不能存在同名合约!",
        contractSaveSuccess: "合约保存成功！",
        contractDeleteFail: "文件夹内存在已部署的合约，无法删除文件夹!",
        contractSaveTips: "按Ctrl+s保存合约内容",
        contractOpenTips: "请在左侧面板点击打开一个合约或新建一个合约",
        sendTransaction: "发送交易",
        changeUser: "选择用户",
        compileSuccess: "< 编译成功！",
        conmileNameError: "合约名和文件名要保持一致!",
        deploySuccess: "< 部署成功！",
        contractDeploySuccess: "合约部署成功！",
        contractName: "合约名称",
        filePath: "文件目录",
        folderName: "文件夹名称",
        folderSameFail: "新建文件夹与已存在的文件夹名称相同",
        user: "用户",
        params: "参数",
        paramsInfo: "如果参数类型是数组，请用逗号分隔，不需要加上引号，例如：arry1,arry2。string等其他类型也不用加上引号。",
        contractAddress: "合约地址",
        method: "方法",
        contractAddressInput: "请输入合约地址",
        contractAddressInfo: "选填项，导入已部署的合约地址。",
        selectUser: "请选择用户",
        methodType: "方法类型",
        methodName: "方法名",
        contractCatalogue: "合约目录",
        copyContractAddress: "复制合约地址",
        contractAbi: "合约abi",
        contractBin: "合约bin",
        copyContractAbi: "复制合约abi",
        copyContractBin: "复制合约bin",
        abiInfo: "abi详情"
    }
}