const prod = {
    url: {
        github_URL: 'https://github.com/Bill-Yunjie-Zhang/zhy',
    }
}

const dev = {
    url: {
        API_URL: 'http://localhost:3000'
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;