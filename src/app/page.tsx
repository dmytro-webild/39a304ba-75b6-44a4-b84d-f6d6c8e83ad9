"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Heart } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumLargeSizeLargeTitles"
      background="aurora"
      cardStyle="subtle-shadow"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Точка на Восточке"
          navItems={[
            { name: "О нас", id: "about" },
            { name: "Атмосфера", id: "features" },
            { name: "Отзывы", id: "testimonials" },
            { name: "Контакты", id: "contact" }
          ]}
          button={{
            text: "Забронировать",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Точка на Восточке"
          description="Ваше идеальное, уютное место на Восточке. Исключительно вкусно. Идеально чисто. Безупречный сервис без долгого ожидания. Средний чек: 3500 ₸."
          buttons={[
            { text: "Забронировать столик", href: "#contact" },
            { text: "Смотреть меню", href: "#" }
          ]}
          background={{ variant: "plain" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzPFQaqTOYbR0rAnC9WTu2mkvq/uploaded-1773595022863-7eu1jlwl.jpg"
          imageAlt="Уютный интерьер ресторана Точка на Восточке"
          mediaAnimation="slide-up"
          buttonAnimation="slide-up"
          frameStyle="card"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Почему мы?
 Все дело в атмосфере и людях."
          description="Каждый визит в Точку на Восточке — это неповторимый опыт гостеприимства, где качество, чистота и профессионализм встречаются в каждой детали."
          features={[
            {
              id: "quality",              title: "Отличная кухня по приятным ценам",              description: "Качество еды на высоте. Мы готовим так, чтобы вы захотели вернуться снова. Идеальный баланс вкуса и приемлемых цен.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzPFQaqTOYbR0rAnC9WTu2mkvq/uploaded-1773602579172-n4sr5ns5.png",              imageAlt: "Профессиональное приготовление блюд"
            },
            {
              id: "service",              title: "Настоящие профессионалы",              description: "Наш персонал — наша гордость. От вежливых официантов до профессиональных администраторов. Мы заботимся о том, чтобы ваш отдых был идеальным.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzPFQaqTOYbR0rAnC9WTu2mkvq/uploaded-1773602853875-5q9f64vm.png",              imageAlt: "Профессиональное обслуживание в ресторане"
            },
            {
              id: "cleanliness",              title: "Чистота и уютный интерьер",              description: "Очень атмосферное место с интересным интерьером. Мы поддерживаем идеальную чистоту, чтобы вам было приятно находиться у нас каждую минуту.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzPFQaqTOYbR0rAnC9WTu2mkvq/uploaded-1773603117356-9p8w0fd1.png",              imageAlt: "Чистый и элегантный интерьер ресторана"
            },
            {
              id: "timing",              title: "Без долгого ожидания",              description: "Ценим ваше время. Быстрая подача блюд и моментальное обслуживание при среднем уровне шума — идеально для приятного вечера.",              imageSrc: "http://img.b2bpic.net/free-photo/upset-barber-man-apron-holding-wall-clock-shaving-brush-looking-camera-with-sad-expression-standing-orange-background_141793-67439.jpg",              imageAlt: "Быстрое и эффективное обслуживание"
            }
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Что о нас говорят гости?"
          description="Случайные встречи, которые становятся любимой традицией."
          testimonials={[
            {
              id: "1",              name: "Айжан К.",              date: "Недавно",              title: "Местный эксперт",              quote: "Очень атмосферное место, вкусно и чисто. Приятно провести время без долгого ожидания.",              tag: "⭐️⭐️⭐️⭐️⭐️",              avatarSrc: "http://img.b2bpic.net/free-photo/expressive-woman-posing-outdoor_344912-2911.jpg",              avatarAlt: "Айжан К."
            },
            {
              id: "2",              name: "Bakhor R.",              date: "Месяц назад",              title: "Постоянный клиент",              quote: "Уютное место, зашли туда совершенно случайно и сделали правильный выбор. Вежливый персонал, администратор — настоящий профессионал. Качество еды отличное, очень вкусно, и цены приемлемые!",              tag: "⭐️⭐️⭐️⭐️⭐️",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-senior-woman-professional-blazer-outdoors-laptop_23-2150296623.jpg",              avatarAlt: "Bakhor R."
            },
            {
              id: "3",              name: "Зарина М.",              date: "Две недели назад",              title: "Благодарный гость",              quote: "Хотела отметить обслуживание — официанты очень вежливые, сервис на высшем уровне. Интерьер интересный и запоминающийся.",              tag: "⭐️⭐️⭐️⭐️⭐️",              avatarSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",              avatarAlt: "Зарина М."
            },
            {
              id: "4",              name: "Марат Т.",              date: "Месяц назад",              title: "Деловой партнер",              quote: "Идеальное место для деловых встреч и неформального общения. Спокойная обстановка, качественная еда и внимательный персонал.",              tag: "⭐️⭐️⭐️⭐️⭐️",              avatarSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-successful-happy-smiling-young-woman-beige-jacket-glasses-standing-lobby-office-reception-greeting-business-client-with-pleasant-grin-inviting-company_197531-30568.jpg",              avatarAlt: "Марат Т."
            },
            {
              id: "5",              name: "Галина С.",              date: "Три недели назад",              title: "Семейный визит",              quote: "Приходили с семьей в выходной день. Все понравилось — уютная атмосфера, вкусная еда и доброжелательный персонал. Вернемся с удовольствием!",              tag: "⭐️⭐️⭐️⭐️⭐️",              avatarSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-typing-her-laptop_231208-13559.jpg",              avatarAlt: "Галина С."
            },
            {
              id: "6",              name: "Ильяс К.",              date: "Недавно",              title: "Молодой профессионал",              quote: "Лучший выбор для уютного вечера с друзьями. Отличная атмосфера, вкусная кухня и быстрое обслуживание. Рекомендую всем!",              tag: "⭐️⭐️⭐️⭐️⭐️",              avatarSrc: "http://img.b2bpic.net/free-photo/woman-holding-coffee-cup-work-medium-shot_23-2149308464.jpg",              avatarAlt: "Ильяс К."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Зашли случайно — остались навсегда"
          title="Ждем вас в Точке на Восточке"
          description="Забронируйте столик заранее или просто заходите в гости! Мы открыты ежедневно и ждем вас."
          tagIcon={Heart}
          background={{ variant: "plain" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzPFQaqTOYbR0rAnC9WTu2mkvq/uploaded-1773603485283-9wgb0cnu.png"
          imageAlt="Ресторан Точка на Восточке"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Введите ваш номер телефона"
          buttonText="Забронировать"
          termsText="Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и получением уведомлений."
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzPFQaqTOYbR0rAnC9WTu2mkvq/uploaded-1773603709327-329590ho.png"
          imageAlt="Точка на Восточке ресторан Алматы"
          logoText="Точка на Восточке"
          copyrightText="© 2024 Точка на Восточке | Ресторан в Алматы"
          columns={[
            {
              title: "Меню",              items: [
                { label: "Завтраки", href: "#" },
                { label: "Обеды", href: "#" },
                { label: "Ужины", href: "#" },
                { label: "Напитки", href: "#" }
              ]
            },
            {
              title: "О нас",              items: [
                { label: "История", href: "#about" },
                { label: "Команда", href: "#" },
                { label: "Карьера", href: "#" },
                { label: "Партнеры", href: "#" }
              ]
            },
            {
              title: "Контакты",              items: [
                { label: "Телефон: +7 (707) 996-5889", href: "tel:+77079965889" },
                { label: "Адрес: ул. Шокая 39a, Алматы", href: "https://maps.app.goo.gl/D17m2YvExysV6boA7" },
                { label: "Instagram", href: "https://www.instagram.com/navostochke_almaty" },
                { label: "2GIS", href: "https://2gis.kz/almaty/search/Tocka%20na%20vostochke/firm/70000001067021556/76.984546%2C43.271513" }
              ]
            },
            {
              title: "Режим работы",              items: [
                { label: "Пн-Пт: 10:00 - 00:00", href: "#" },
                { label: "Сб-Вс: 10:00 - 02:00", href: "#" },
                { label: "Бронирование: по телефону", href: "#" },
                { label: "Политика конфиденциальности", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}