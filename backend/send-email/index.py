import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта ретрита на почту организатора"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    message = body.get('message', '').strip()

    if not name or not email or not message:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Заполните все поля'})
        }

    smtp_user = 'rostok-marina@mail.ru'
    smtp_password = os.environ['SMTP_PASSWORD']
    to_email = 'rostok-marina@mail.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка на ретрит от {name}'
    msg['From'] = smtp_user
    msg['To'] = to_email

    html = f"""
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #2c2c2c;">
        <h2 style="font-weight: 300; font-size: 24px; margin-bottom: 24px; border-bottom: 1px solid #e0e0e0; padding-bottom: 16px;">
            Новая заявка на ретрит
        </h2>
        <p><strong>Имя:</strong> {name}</p>
        <p><strong>Email:</strong> <a href="mailto:{email}">{email}</a></p>
        <p><strong>Сообщение:</strong></p>
        <p style="background: #f9f6f1; padding: 16px; border-left: 3px solid #8a9e7e;">{message}</p>
    </div>
    """

    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
