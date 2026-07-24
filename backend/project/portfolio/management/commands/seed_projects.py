import os
from datetime import date

from django.conf import settings
from django.core.files import File
from django.core.management.base import BaseCommand

from portfolio.models import Category, Portfolio

# Flagship products delivered by SystemCog.
# NOTE: descriptions are DRAFT placeholders and `website` is intentionally left blank
# (auto-filled by Portfolio.save() from SITE_DOMAIN). Refine the copy, live URLs and
# images per-product in the /super dashboard.
PROJECTS = [
    {
        "name": "Schoolpadi",
        "category": "EdTech",
        "image": "p1.png",
        "date": date(2023, 3, 1),
        "description": (
            "<p>Schoolpadi is a school management platform that helps schools run "
            "admissions, student records, results, fees and parent communication from "
            "a single dashboard. <em>(Draft copy &mdash; replace with the real product "
            "description in /super.)</em></p>"
        ),
    },
    {
        "name": "Exampadi",
        "category": "EdTech",
        "image": "p2.png",
        "date": date(2023, 8, 1),
        "description": (
            "<p>Exampadi is an exam preparation and CBT practice platform that gives "
            "students realistic mock tests, instant scoring and progress tracking across "
            "subjects. <em>(Draft copy &mdash; replace with the real product description "
            "in /super.)</em></p>"
        ),
    },
    {
        "name": "Kwikride",
        "category": "Mobility",
        "image": "p3.png",
        "date": date(2024, 2, 1),
        "description": (
            "<p>Kwikride is a ride-hailing and logistics product connecting riders and "
            "drivers with real-time matching, trip tracking and in-app payments. "
            "<em>(Draft copy &mdash; replace with the real product description in "
            "/super.)</em></p>"
        ),
    },
    {
        "name": "Tysbe",
        "category": "Marketplace",
        "image": "p4.png",
        "date": date(2024, 9, 1),
        "description": (
            "<p>Tysbe is an online marketplace that connects buyers and sellers with "
            "secure listings, orders and payments in one place. <em>(Draft copy &mdash; "
            "replace with the real product description in /super.)</em></p>"
        ),
    },
]

# Theme placeholder images live under static/assets/images/p1/ — swappable later.
PLACEHOLDER_DIR = os.path.join(
    settings.BASE_DIR, "static", "assets", "images", "p1"
)


class Command(BaseCommand):
    help = "Seed SystemCog's flagship products as Portfolio records (idempotent)."

    def handle(self, *args, **options):
        created, skipped = 0, 0

        for data in PROJECTS:
            if Portfolio.objects.filter(name=data["name"]).exists():
                self.stdout.write(f"= Skipped (already exists): {data['name']}")
                skipped += 1
                continue

            category, _ = Category.objects.get_or_create(name=data["category"])

            portfolio = Portfolio(
                name=data["name"],
                description=data["description"],
                author="SystemCog Team",
                date=data["date"],
            )

            source = os.path.join(PLACEHOLDER_DIR, data["image"])
            if not os.path.exists(source):
                self.stderr.write(
                    f"! Placeholder image missing for {data['name']}: {source}"
                )
                continue

            # Assign both image fields; Portfolio.save() resizes them to the
            # required grid dimensions (1712x840 / 832x840).
            with open(source, "rb") as f:
                portfolio.image.save(
                    f"{portfolio_slug(data['name'])}.png", File(f), save=False
                )
            with open(source, "rb") as f:
                portfolio.short_image.save(
                    f"{portfolio_slug(data['name'])}_short.png", File(f), save=False
                )

            portfolio.save()
            portfolio.category.add(category)

            self.stdout.write(self.style.SUCCESS(f"+ Created: {data['name']}"))
            created += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"\nDone. {created} created, {skipped} skipped, "
                f"{Portfolio.objects.count()} total portfolio records."
            )
        )


def portfolio_slug(name):
    from django.utils.text import slugify

    return slugify(name)
