# Feeder Fish

---

> PS: This app is meant to be used for learning purposes only. The original app can be found [here](http://feedback.fish/). This app does not try to harm or replace the original app in any way possible.

Collect issues, ideas, and compliments with a simple widget. Receive them as email. Dive deep with the dashboard.

### Setup

- clone this repository.
- `cd` into the folder and run `bundle install`.
- `cd` into the `client` folder and run `yarn install`.
- `cd` into the root directory of this app and run `rails credentials:edit` or `EDITOR='code --wait' bin/rails credentials:edit` if you are using vscode.

```yml
gmail:
  email: your_gmail_address
  password: your_gmail_password
```

> You need to enable 2FA authentication in your gmail account and request for `app password` for your gmail account. Please read [this](https://support.google.com/accounts/answer/185833?hl=en) article to get your `app password` for your account.

That's it. `cd` into the root directory of this app if you haven't and run `foreman start -f Procfile.dev`.
OR you can also run the `backend` and the `client` side independently.
Backend: `rails s -p 3000`
Client: `cd client && yarn start`
