import { defineEventHandler, readBody } from 'h3';
import { $fetch } from 'ohmyfetch';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    if (!body) {
        return {
            ok: false,
            description: 'Отсутствует тело запроса',
        };
    }

    const { fio, phone, comment } = body;

    if (!fio || !phone || !comment) {
        return {
            ok: false,
            description: 'Не все поля заполнены',
        };
    }

    const message = `❗️НОВАЯ ЗАЯВКА \n\n ФИО: ${fio}\nТелефон: ${phone}\nКомментарий: ${comment}`;
    const token = '6777126933:AAFQtZeX7rgUatDAgq7yYWXd4tPmWiKZPI4'; // Замените на токен вашего бота
    const chatId = '950445300'; // Замените на ваш chat ID или ID группы, куда хотите отправлять сообщения

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await $fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        return {
            ok: true,
            response,
        };
    } catch (error) {
        console.error('Ошибка:', error);
        return {
            ok: false,
            description: 'Ошибка отправки сообщения',
            error: error.message,
        };
    }
});
